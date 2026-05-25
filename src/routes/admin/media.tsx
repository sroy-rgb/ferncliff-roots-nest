import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AdminLayout, Card, PageHeader, Button } from "@/components/admin/AdminLayout";
import { Plus, MagnifyingGlass, SquaresFour, List, CloudArrowUp, X } from "@phosphor-icons/react";

export const Route = createFileRoute("/admin/media")({
  component: MediaPage,
  head: () => ({ meta: [{ title: "Media — Ferncliff CMS" }] }),
});

const images = [
  "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
  "https://images.pexels.com/photos/45170/kids-girl-pencil-drawing-45170.jpeg",
  "https://images.pexels.com/photos/8612918/pexels-photo-8612918.jpeg",
  "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg",
  "https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg",
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  "https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg",
  "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
  "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg",
  "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
];

function MediaPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const upload = () => {
    setShowUpload(false);
    setTimeout(() => {
      setToast("Upload complete");
      setTimeout(() => setToast(null), 3000);
    }, 800);
  };

  return (
    <AdminLayout title="Media Library">
      <PageHeader title="Media Library" action={<Button onClick={() => setShowUpload(true)}><Plus size={14} /> Upload</Button>} />

      {showUpload && (
        <Card className="p-6 mb-4 border-2 border-dashed border-[#2B7A6F]/40 text-center cursor-pointer" onClick={upload}>
          <CloudArrowUp size={42} className="mx-auto text-[#2B7A6F]" />
          <div className="mt-2 text-[14px] font-medium">Drag files here or click to browse</div>
          <div className="text-[12px] text-[#888]">PNG, JPG, GIF up to 10MB</div>
        </Card>
      )}

      <Card className="p-4 mb-4 flex items-center gap-3">
        <button className="p-1.5 rounded bg-[#2B7A6F]/10 text-[#2B7A6F]"><SquaresFour size={16} /></button>
        <button className="p-1.5 rounded text-[#888]"><List size={16} /></button>
        <div className="relative flex-1 max-w-xs">
          <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" />
          <input placeholder="Search media..." className="w-full h-9 pl-9 pr-3 rounded-md border border-[#E5E5E5] text-[13px]" />
        </div>
        <select className="h-9 px-3 rounded-md border border-[#E5E5E5] text-[13px]">
          <option>All</option><option>Images</option><option>Documents</option><option>Videos</option>
        </select>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => setSelected(i)} className={`group relative aspect-square rounded-lg overflow-hidden border-2 ${selected === i ? "border-[#2B7A6F]" : "border-transparent"}`}>
            <img src={src} alt={`Media ${i + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-2 text-white text-[11px] opacity-0 group-hover:opacity-100">
              image-{i + 1}.jpg
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setSelected(null)}>
          <div className="absolute inset-y-0 right-0 w-full sm:w-[400px] bg-white p-5 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-[13px] font-semibold">Image Details</div>
              <button onClick={() => setSelected(null)}><X size={18} /></button>
            </div>
            <img src={images[selected]} alt="" className="w-full rounded-md mb-4" />
            <div className="space-y-3 text-[12px]">
              <div><div className="text-[#888]">Filename</div><div>image-{selected + 1}.jpg</div></div>
              <div className="flex gap-4">
                <div><div className="text-[#888]">Size</div><div>1.2 MB</div></div>
                <div><div className="text-[#888]">Dimensions</div><div>2400 × 1600</div></div>
              </div>
              <div><div className="text-[#888]">Uploaded</div><div>May 22, 2026</div></div>
              <div>
                <div className="text-[#888] mb-1">Alt Text</div>
                <input placeholder="Describe this image..." className="w-full h-9 px-3 rounded-md border border-[#E5E5E5]" />
              </div>
              <div>
                <div className="text-[#888] mb-1">Caption</div>
                <input className="w-full h-9 px-3 rounded-md border border-[#E5E5E5]" />
              </div>
              <div>
                <div className="text-[#888] mb-1">URL</div>
                <input readOnly value={images[selected]} className="w-full h-9 px-2 rounded-md border border-[#E5E5E5] text-[11px] bg-[#F8F8F8]" />
              </div>
              <button className="w-full mt-3 h-9 rounded-md border border-red-300 text-red-600 text-[13px] hover:bg-red-50">Delete</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed top-20 right-6 z-[60] bg-green-600 text-white px-4 py-2 rounded-md shadow-lg text-[13px]">{toast}</div>
      )}
    </AdminLayout>
  );
}
