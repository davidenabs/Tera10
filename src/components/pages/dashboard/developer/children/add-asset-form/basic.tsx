import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { basicSchema } from "@/schemas/add-asset-schema";
import { Button } from "@/components/ui/button";

type FormData = z.infer<typeof basicSchema>;

const BasicForm = ({ onFinish }: { onFinish: () => void }) => {
  const [files, setFiles] = useState<File[] | null>(null);

  const [formData, setFormData] = useState<FormData>({
    propertyName: "",
    propertyType: "",
    location: "",
    description: "",
    mediaFiles: undefined,
  });

  const form = useForm<FormData>({
    resolver: zodResolver(basicSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: FormData) => {
    setFormData({ ...data, mediaFiles: files });
    onFinish();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
          <FormField
            control={form.control}
            name="propertyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter asset name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[138px]"
                    placeholder="Describe the property"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mediaFiles"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Media Files</FormLabel>
                <FormControl>
                  <div className="border border-dashed bg-white border-gray-300 p-7 rounded-xl text-center">
                    <input
                      id="files"
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif"
                      multiple
                      hidden
                      onChange={(e) => {
                        const selectedFiles = e.target.files
                          ? Array.from(e.target.files)
                          : null;
                        setFiles(selectedFiles);
                        field.onChange(selectedFiles);
                      }}
                    />
                    <label
                      htmlFor="files"
                      className="border rounded-xl border-gray-400 font-medium p-2 text-sm"
                    >
                      Add Files
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Accepts .gif, .jpg, and .png
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="rounded-full">
              Submit Asset
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default BasicForm;
