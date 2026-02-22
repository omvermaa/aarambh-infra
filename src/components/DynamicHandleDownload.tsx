
import brochure from "@/assets/brochure.pdf";

const DynamicDownloadComponent = () => {
  const handleDownload = async () => {
    try {
      // Fetch the file from a URL or API endpoint
      const response = await fetch(brochure);
      const blob = await response.blob(); // Get the response as a Blob

      // Create a URL for the blob
      const fileUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor tag to trigger the download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'dynamic-file-name.pdf'); // Specify the file name
      document.body.appendChild(link);
      link.click(); // Simulate a click to start the download

      // Clean up the temporary link and revoke the object URL to free memory
      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <button onClick={handleDownload}>
      Download Dynamic File
    </button>
  );
};

export default DynamicDownloadComponent;
