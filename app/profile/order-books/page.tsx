import { FileUpload } from "@/app/components/profile/file-upload";
import { Header } from "@/app/components/profile/header";
import { Sidebar } from "@/app/components/profile/sideBar";

export default function OrderBooksPage() {
  return (
    <div className="flex bg-gray-50">
      <Sidebar activeItemId="order-books" />
      <div className="flex-1 flex flex-col m-10 min-h-svh">
        <Header />
        <main className="flex-1 p-6">
          <div className="mt-5">
            <FileUpload />
          </div>
        </main>
      </div>
    </div>
  );
}
