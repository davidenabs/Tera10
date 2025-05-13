import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

interface FileUploaderProps {
  accept?: string;
  onFileChange: (file: File | null) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  accept = ".png,.jpg,.jpeg,.svg,.gif",
  onFileChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileSelect = (fileList: FileList | null) => {
    if (fileList && fileList[0]) {
      const file = fileList[0];
      setFileName(file.name);
      onFileChange(file);
    } else {
      setFileName(null);
      onFileChange(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
  };

  return (
    <label
      htmlFor="file-input"
      className="border border-dashed border-gray-300 rounded-xl py-8 px-4 text-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="flex flex-col items-center gap-2">
        <UploadCloud className="h-6 w-6 text-gray-500" />
        <p className="text-sm text-gray-500">
          {fileName ? (
            <span className="text-gray-800 font-medium">{fileName}</span>
          ) : (
            <>
              <span className="text-orange-600 font-semibold">
                Click to upload
              </span>{" "}
              or drag and drop
            </>
          )}
        </p>
        <p className="text-xs text-gray-400">
          SVG, PNG, JPG or GIF (max. 800×400px)
        </p>
      </div>
      <input
        ref={inputRef}
        id="file-input"
        type="file"
        accept={accept}
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
      />
    </label>
  );
};
