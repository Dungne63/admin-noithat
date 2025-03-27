import { Button } from "@heroui/react";
import { FC, useRef } from "react";

const AppUploadImage: FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result); // Đây là chuỗi Base64 của ảnh
      };
    }
  };

  const uploadImage = async (base64: string) => {
    await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64 }),
    });
  };

  return (
    <div>
      <Button onPress={() => handleFileChange}>Tải ảnh lên</Button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e.target.files)}
        className="hidden"
      />
    </div>
  );
};

export default AppUploadImage;
