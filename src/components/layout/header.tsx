import { Link, useLocation } from "react-router-dom";
import { Menu, X, Target, Phone, User, LogIn, LogOut, Key, UserPlus, LayoutDashboard, Camera, Trash2, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { checkAuthUser, logoutUser, updateUserProfile } from "@/store/slices/authSlice";
import { openComingSoonModal } from "@/store/slices/uiSlice";
import { toast } from "sonner";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isConsultationHovered, setIsConsultationHovered] = useState(false);
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarLoading, setAvatarLoading] = useState(false);

  useEffect(() => {
    dispatch(checkAuthUser());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size must be less than 2MB.");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    setAvatarLoading(true);
    const loadingToast = toast.loading("Updating profile picture...");
    try {
      await dispatch(updateUserProfile({ id: user!._id, formData })).unwrap();
      toast.success("Profile picture updated successfully!");
    } catch (err: any) {
      toast.error(err || "Failed to update profile picture.");
    } finally {
      setAvatarLoading(false);
      toast.dismiss(loadingToast);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveAvatar = async () => {
    const formData = new FormData();
    formData.append("removeAvatar", "true");

    setAvatarLoading(true);
    const loadingToast = toast.loading("Removing profile picture...");
    try {
      await dispatch(updateUserProfile({ id: user!._id, formData })).unwrap();
      toast.success("Profile picture removed successfully!");
    } catch (err: any) {
      toast.error(err || "Failed to remove profile picture.");
    } finally {
      setAvatarLoading(false);
      toast.dismiss(loadingToast);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Corporate Training", href: "/corporate-training" },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SMARRTIF</span>
              <span className="ml-1 text-xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm transition-colors relative ${
                  isActive(item.href)
                    ? "text-[var(--brand-red)]"
                    : "text-gray-700 hover:text-[var(--brand-red)]"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[var(--brand-red)]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {/* <button
              onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg overflow-hidden text-white hover:shadow-xl font-semibold transition-all cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: isHovered ? 'right' : 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Target className="h-4 w-4" />
              <span className="text-sm">Take Assessment</span>
            </button> */}
            {/* <button
              onClick={() => dispatch(openComingSoonModal("Book Consultation"))}
              className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white transition-all duration-300 font-semibold cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Book Consultation</span>
            </button> */}
            
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-[var(--brand-red)] font-semibold text-sm px-3 py-2.5 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg hover:opacity-95 transition-all duration-300 font-semibold text-sm"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign up</span>
                </Link>
              </>
            ) : (
              /* Account Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-orange-50 transition-all duration-300 cursor-pointer overflow-hidden p-0.5"
                  aria-label="Account Menu"
                  title="Account Menu"
                >
                  {user.avatar?.secure_url ? (
                    <img
                      src={user.avatar.secure_url}
                      alt={user.fullName || "User Avatar"}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-gray-150 shadow-2xl py-2.5 z-50">
                    {/* User Profile Info Card */}
                    <div className="px-4 py-3 border-b border-gray-100 flex flex-col items-center gap-1.5">
                      <div className="relative group w-16 h-16 rounded-full border-2 border-[var(--brand-orange)]/60 p-0.5 overflow-hidden shadow-sm">
                        {user.avatar?.secure_url ? (
                          <img
                            src={user.avatar.secure_url}
                            alt={user.fullName || "User Avatar"}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-orange-50 text-[var(--brand-orange)] rounded-full">
                            <User className="h-7 w-7" />
                          </div>
                        )}
                        {/* Overlay with Camera Icon */}
                        <button
                          onClick={handleTriggerUpload}
                          disabled={avatarLoading}
                          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 cursor-pointer disabled:opacity-50"
                          title="Change Profile Photo"
                        >
                          <Camera className="h-5 w-5 text-white animate-pulse" />
                        </button>
                      </div>
                      
                      <div className="text-center w-full mt-1">
                        <div className="text-xs font-extrabold text-gray-900 truncate px-1">
                          {user.fullName}
                        </div>
                        <div className="text-[10px] text-gray-500 truncate px-1">
                          {user.email}
                        </div>
                      </div>

                      {/* Photo Edit Actions */}
                      <div className="flex gap-2.5 mt-2 w-full justify-center">
                        <button
                          onClick={handleTriggerUpload}
                          disabled={avatarLoading}
                          className="px-2.5 py-1 text-[10px] font-extrabold text-[var(--brand-orange)] hover:bg-orange-50 border border-orange-200 rounded-lg cursor-pointer flex items-center gap-1.5 transition-all"
                        >
                          {avatarLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Camera className="h-3 w-3" />}
                          Update
                        </button>
                        {user.avatar?.public_id && user.avatar.public_id !== "default_avatar" && (
                          <button
                            onClick={handleRemoveAvatar}
                            disabled={avatarLoading}
                            className="px-2.5 py-1 text-[10px] font-extrabold text-red-650 hover:bg-red-50 border border-red-200 rounded-lg cursor-pointer flex items-center gap-1.5 transition-all"
                          >
                            <Trash2 className="h-3 w-3" />
                            Remove
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="pt-1.5">
                      <Link
                        to="/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--brand-orange)] transition-colors font-semibold"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                      <Link
                        to="/change-password"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--brand-orange)] transition-colors font-semibold"
                      >
                        <Key className="h-4 w-4" />
                        <span>Change Password</span>
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer font-bold"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm ${
                    isActive(item.href)
                      ? "text-[var(--brand-red)]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  dispatch(openComingSoonModal("Take Assessment"));
                }}
                className="text-sm text-gray-700 text-left cursor-pointer"
              >
                Take Assessment
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  dispatch(openComingSoonModal("Book Consultation"));
                }}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white text-center cursor-pointer"
              >
                Book Consultation
              </button>

              {/* Mobile Account Options */}
              <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-3">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <LogIn className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Login</span>
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <UserPlus className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Sign up</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="px-4 text-xs text-gray-500 font-medium">
                      Logged in as: {user.email}
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <LayoutDashboard className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/change-password"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <Key className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>Change Password</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm text-red-600 hover:text-red-700 text-left w-full cursor-pointer font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}