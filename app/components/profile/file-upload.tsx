"use client";

import type React from "react";

import { useState, useCallback } from "react";
import { Upload, FileText } from "lucide-react";

import { Button } from "@mui/material";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  className?: string;
}

export function FileUpload({ onFileSelect, className }: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        const file = files[0];
        setSelectedFile(file);
        onFileSelect?.(file);
      }
    },
    [onFileSelect]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setSelectedFile(file);
        onFileSelect?.(file);
      }
    },
    [onFileSelect]
  );

  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);
      // Simulate upload
      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div
        className={`border-2 border-dashed rounded-lg px-12 py-28  text-center bg-[#E4F5E4]",
          ${isDragOver ? "border-green-400 bg-green-100" : "border-green-200"}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-4 max-w-md mx-auto">
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={() => document.getElementById("file-input")?.click()}
            style={{
              background: "#28A745",
              color: "white",
            }}
            fullWidth
          >
            <Upload className="w-4 h-4 mr-2" />
            Select files
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Upload your <span className="text-green-600">CSV</span> containing
            the list of books you <br /> want to purchase
          </p>
        </div>

        <input
          id="file-input"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {selectedFile && (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">{selectedFile.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {isUploading ? (
                <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded">
                  Uploading...
                </span>
              ) : (
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={handleUpload}
                >
                  Send Order
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
