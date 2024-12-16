import React from "react";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="bg-gray-800 text-white h-full">
      <div className="p-6 border-b border-gray-700">
        <h2 className="lg:text-2xl text-md font-bold lg:text-center text-start">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        <Link href="/admin">
          <div className="sidebar-item">
            <CgMenuGridR className="sidebar-icon" />
            <span className="sidebar-text">Dashboard</span>
          </div>
        </Link>
        <Link href="/admin/articles-table">
          <div className="sidebar-item">
            <MdOutlineArticle className="sidebar-icon" />
            <span className="sidebar-text">Articles</span>
          </div>
        </Link>
        <Link href="/admin/comments-table">
          <div className="sidebar-item">
            <FaRegComments className="sidebar-icon" />
            <span className="sidebar-text">Comments</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default AdminSidebar;
