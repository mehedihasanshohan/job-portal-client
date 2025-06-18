import React from 'react';
import logo from '../../assets/jobs-logo.png';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <aside className="space-y-4">
          <img src={logo} alt="Job Portal Logo" className="w-20" />
          <p className="text-sm font-medium">
            <strong>Job Portal Ltd.</strong><br />
            Providing reliable jobs since 1992.
          </p>
        </aside>

        {/* Services */}
        <nav className="flex flex-col space-y-2">
          <h6 className="footer-title text-lg font-semibold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Company */}
        <nav className="flex flex-col space-y-2">
          <h6 className="footer-title text-lg font-semibold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Legal */}
        <nav className="flex flex-col space-y-2">
          <h6 className="footer-title text-lg font-semibold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Job Portal Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
