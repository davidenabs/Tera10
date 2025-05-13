import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "iconsax-react";
import { FileUploader } from "@/components/ui/file";
// import { FileUploader } from "@/components/ui/file-uploader";

const KYBSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  position: z.string().min(1, "Position/Title is required"),
  email: z.string().min(1, "Email address is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  governmentIssuedId: z.any().refine((file) => file?.size <= 800000, {
    message: "File size must be less than 800KB",
  }),
});

const ContactPersonForm = ({
  onFinish,
  onPrevious,
}: {
  onFinish: () => void;
  onPrevious: () => void;
}) => {
  const form = useForm<z.infer<typeof KYBSchema>>({
    resolver: zodResolver(KYBSchema),
    defaultValues: {
      fullName: "",
      position: "",
      email: "",
      governmentIssuedId: null,
    },
  });

  function onSubmit(data: z.infer<typeof KYBSchema>) {
    // toast.success("Business identity submitted successfully!");
    console.log(data);
    // goTo("/next-step");
    onFinish();
  }

  return (
    <div className="py-10">
      <div className="text-center pb-10">
        <h2 className="text-2xl font-semibold mb-2">Contact Person (KYC)</h2>
        <p className="text-gray-500 text-sm mb-6">
          For security and accountability, we verify the main contact behind{" "}
          <br />
          each developer account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full name of contact person "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position/Title*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position/Title*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>phoneNumber of Incorporation</FormLabel>
                  <FormControl>
                    <Input placeholder="Select phoneNumber" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="governmentIssuedId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Government Issued ID</FormLabel>
                <FormControl>
                  <FileUploader
                    accept=".png,.jpg,.jpeg,.svg,.gif"
                    onFileChange={(file) => field.onChange(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between -mb-10">
            <Button
              variant={"link"}
              onClick={onPrevious}
              className="flex items-center gap-2"
            >
              <ArrowLeft color="#000" />
              <span>Go back</span>
            </Button>
            <Button type="submit" className="rounded-full">
              Proceed
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactPersonForm;
