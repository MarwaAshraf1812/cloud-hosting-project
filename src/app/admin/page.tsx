import React from "react";
import Link from "next/link";
import AddArticleForm from "./AddArticleForm";
import Insights from "./Insights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing articles, insights, and more",
};

function AdminPage() {
  const insightsData = [
    { label: "Total Articles", value: 120 },
    { label: "Comments This Month", value: 45 },
    { label: "New Users", value: 20 },
  ];


  return (
    <div className="fixed_height bg-gray-100 px-5 lg:px-20 py-2">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your articles, insights, and more</p>
      </header>

      <div className="grid grid-rows-[auto_1fr] lg:grid-cols-3 lg:grid-rows-1 gap-8">
        <div className="lg:col-span-3 lg:row-span-1">
          <Insights items={insightsData} />
        </div>
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl text-blue-500 font-bold mb-5">Add New Article</h2>
          <AddArticleForm />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl text-blue-500 font-bold mb-5">Manage Content</h2>
          <div className="space-y-4 flex flex-col gap-2">
            <Link href={'/admin/articles-table'} className="w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              View All Articles
            </Link>
            <Link href={'/admin/comments-table'} className="w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Manage Comments
            </Link>
            <Link href={'/admin/articles-table'} className="w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Approve Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
