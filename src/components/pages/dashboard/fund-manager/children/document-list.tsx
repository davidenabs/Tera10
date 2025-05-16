import { useState } from "react";

interface Document {
  id: string;
  name: string;
  type: "pdf" | "ppt" | "doc" | "jpg" | "xls" | "png" | "txt" | "other";
}

interface DocumentListProps {
  documents: Document[];
  onView: (document: Document) => void;
}

const DocumentList = ({ documents, onView }: DocumentListProps) =>{
  // Function to determine icon color based on document type
  const getIconColor = (type: Document["type"]): string => {
    switch (type) {
      case "pdf":
        return "bg-red-500";
      case "ppt":
        return "bg-red-500";
      case "doc":
        return "bg-blue-500";
      case "jpg":
        return "bg-pink-500";
      case "xls":
        return "bg-green-500";
      case "png":
        return "bg-purple-500";
      case "txt":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };

  // Function to get file type label
  const getFileTypeLabel = (type: Document["type"]): string => {
    return type.toUpperCase();
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="borderb">
            <th className="text-left py-4 px-6 font-medium">Name</th>
            <th className="text-right py-4 px-6 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className=" hover:bg-gray-50">
              <td className="py-4 px-6 flex items-center">
                <div className={`w-10 h-10 ${getIconColor(doc.type)} rounded flex items-center justify-center text-white mr-4`}>
                  <span className="text-xs font-bold">{getFileTypeLabel(doc.type)}</span>
                </div>
                <span>{doc.name}</span>
              </td>
              <td className="py-4 px-6 text-right">
                <button
                  onClick={() => onView(doc)}
                  className="text-black font-medium underline hover:no-underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


const sampleDocuments = [
  { id: "1", name: "CAC", type: "pdf" as const },
  { id: "2", name: "TPIN", type: "ppt" as const },
  { id: "3", name: "Concept Note", type: "doc" as const },
  { id: "4", name: "Land Document", type: "jpg" as const },
];

const Documents =() => {
  const [selectedDocument, setSelectedDocument] = useState<Document|null>(null);
  
  return (
    <div className="">
      
      <DocumentList
        documents={sampleDocuments}
        onView={(doc) => {
          setSelectedDocument(doc);
          console.log(`Viewing ${doc.name}`);
        }}
      />
      
      {selectedDocument && (
        <div className="mt-8 p-6 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-medium mb-4">Document Preview</h2>
          <div className="p-4 border rounded bg-white min-h-40 flex items-center justify-center">
            <p>Preview for: {selectedDocument.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documents;