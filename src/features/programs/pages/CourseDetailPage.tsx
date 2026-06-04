import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCourses, fetchEnrolledCourses, fetchCourseLectures } from "@/store/slices/courseSlice";
import { getRazorpayKey, createCourseOrder, verifyCoursePayment } from "@/store/slices/paymentSlice";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Video, 
  User, 
  Shield, 
  PlayCircle, 
  Lock, 
  CheckCircle,
  Loader2,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

// Razorpay Script Loader Helper
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const { user } = useAppSelector((state) => state.auth);
  const { courses, enrolledCourses, selectedCourseLectures, status } = useAppSelector((state) => state.courses);
  const { razorpayKey } = useAppSelector((state) => state.payment);
  
  const [isPaying, setIsPaying] = useState(false);
  const [loadingLectures, setLoadingLectures] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
    if (user) {
      dispatch(fetchEnrolledCourses());
    }
  }, [dispatch, courses.length, user]);

  const course = courses.find((c) => c._id === courseId);

  const isPurchased = (() => {
    if (!course) return false;
    if (user?.role === "ADMIN") return true;
    if (course.isPurchased) return true;
    return enrolledCourses?.some((c: any) => c._id === course._id || c === course._id) || false;
  })();

  useEffect(() => {
    if (courseId && isPurchased) {
      setLoadingLectures(true);
      dispatch(fetchCourseLectures(courseId))
        .unwrap()
        .catch(() => {})
        .finally(() => setLoadingLectures(false));
    }
  }, [courseId, isPurchased, dispatch]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="w-12 h-12 text-[var(--brand-orange)] animate-spin" />
        <p className="text-gray-500 font-medium">Loading program details...</p>
      </div>
    );
  }

  const handleBuyNow = async () => {
    if (!user) {
      toast.error("Please login to purchase courses.");
      navigate("/login", { state: { from: `/programs/${courseId}` } });
      return;
    }

    setIsPaying(true);
    try {
      // 1. Load Razorpay Script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Failed to load Razorpay Payment Gateway. Check internet connection.");
        setIsPaying(false);
        return;
      }

      // 2. Fetch Razorpay Key if not loaded
      let key = razorpayKey;
      if (!key) {
        key = await dispatch(getRazorpayKey()).unwrap();
      }

      // 3. Create Order on Backend
      const orderResponse = await dispatch(createCourseOrder(course._id)).unwrap();
      
      // 4. Open Razorpay Checkout Modal
      const options = {
        key: key,
        amount: orderResponse.amount,
        currency: orderResponse.currency,
        name: "Smarrtif AI LMS",
        description: `Unlock Course: ${course.title}`,
        order_id: orderResponse.order_id,
        handler: async function (response: any) {
          try {
            const verifyPayload = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              courseId: course._id,
            };

            await dispatch(verifyCoursePayment(verifyPayload)).unwrap();
            toast.success("Payment verified! Course unlocked successfully.");
            
            // Re-fetch courses list & enrolled courses to reflect updated state
            dispatch(fetchCourses());
            dispatch(fetchEnrolledCourses());
          } catch (err: any) {
            toast.error(err || "Payment verification failed.");
          }
        },
        prefill: {
          name: user.fullName || "",
          email: user.email || "",
        },
        theme: {
          color: "#f97316", // Brand Orange
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        toast.error(response.error.description || "Payment failed.");
      });
      rzp.open();
    } catch (error: any) {
      toast.error(error || "Payment flow initialization failed.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-orange-950 text-white overflow-hidden py-12 md:py-20 border-b border-orange-500/10">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors mb-6 uppercase tracking-wider bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-2 space-y-6">
              <span className="text-[11px] font-extrabold tracking-wider uppercase bg-orange-500/20 px-3.5 py-1.5 rounded-full text-orange-400 border border-orange-500/20 shadow-sm inline-block">
                {course.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 font-semibold border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <User className="h-4 w-4 text-orange-400" />
                  <span>Instructor: {course.createdBy}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <Video className="h-4 w-4 text-orange-400" />
                  <span>{course.numberOfLectures} syllabus lectures</span>
                </div>
              </div>
            </div>

            {/* Right Card / Thumbnail / Action */}
            <div className="w-full">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col justify-between">
                {/* Thumbnail Preview */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 mb-6 border border-white/10 relative">
                  {course.thumbnail?.secure_url ? (
                    <img
                      src={course.thumbnail.secure_url}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-white/20" />
                    </div>
                  )}
                </div>

                {/* Purchase Panel */}
                <div className="space-y-4">
                  {isPurchased ? (
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4 bg-emerald-500/10 px-4 py-2.5 rounded-xl border border-emerald-500/20 text-xs">
                        <CheckCircle className="h-5 w-5" />
                        You own this program! Access is unlocked.
                      </div>
                      <Link
                        to="/dashboard"
                        className="w-full py-4 px-4 rounded-xl text-white font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:scale-[1.01] transition-all text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
                      >
                        <Shield className="h-4.5 w-4.5" />
                        Go to Dashboard & Study
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2 mb-4 justify-between border-b border-white/5 pb-4">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Course Price:</span>
                        <span className="text-3xl font-extrabold text-orange-400">₹{course.price || 0}</span>
                      </div>
                      <button
                        onClick={handleBuyNow}
                        disabled={isPaying}
                        className="w-full py-4 px-4 rounded-xl text-white font-extrabold bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-95 hover:shadow-lg hover:scale-[1.01] transition-all text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                      >
                        {isPaying ? (
                          <>
                            <Loader2 className="h-4.5 w-4.5 animate-spin" />
                            Initializing Gateway...
                          </>
                        ) : (
                          <>
                            Buy Now & Get Instant Access
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-center text-gray-400 mt-3 font-medium">
                        Secure transaction processed via Razorpay Gateway. Unconditional access.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content / Lectures */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Syllabus Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 pb-4 border-b border-gray-150 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-orange-500" />
                Course Syllabus Outline
              </h2>

              {!isPurchased ? (
                <div className="p-8 bg-gray-50 border border-dashed border-gray-200 rounded-2xl text-center space-y-4">
                  <Lock className="h-10 w-10 text-gray-400 mx-auto" />
                  <h3 className="text-base font-bold text-gray-900">Syllabus Outline Locked</h3>
                  <p className="text-gray-500 text-xs max-w-sm mx-auto leading-relaxed">
                    Syllabus outline and video content are restricted. Purchase the course to gain full access to the training modules.
                  </p>
                </div>
              ) : loadingLectures ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <Loader2 className="w-8 h-8 text-[var(--brand-orange)] animate-spin" />
                  <p className="text-gray-450 text-xs">Loading course syllabus...</p>
                </div>
              ) : selectedCourseLectures.length === 0 ? (
                <p className="text-gray-550 text-xs text-center py-6">No lectures uploaded for this course yet.</p>
              ) : (
                <div className="space-y-3">
                  {selectedCourseLectures.map((lecture, index) => (
                    <div
                      key={lecture._id}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors"
                    >
                      <div className="p-2 rounded-xl bg-orange-100 text-orange-600">
                        <PlayCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                          Module {index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 mt-0.5">{lecture.title}</h4>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{lecture.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 space-y-4">
              <h3 className="text-md font-extrabold text-gray-950 flex items-center gap-2 border-b border-gray-150 pb-3">
                <Sparkles className="h-5 w-5 text-orange-500" />
                What's Included
              </h3>
              <ul className="text-xs text-gray-650 font-semibold space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                  <span>Full lifetime access to video material</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                  <span>Hands-on practice modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                  <span>Certificate of Completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
