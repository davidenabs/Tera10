import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { milestonesFormSchema } from "@/schemas/add-asset-schema";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CIcon, CloseCircle } from "iconsax-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

type FormData = z.infer<typeof milestonesFormSchema>;

const MilestonesForm = ({
  onFinish,
  onPrevious,
}: {
  onFinish: () => void;
  onPrevious: () => void;
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(milestonesFormSchema),
    defaultValues: {
      milestones: [
        {
          name: "",
          startDate: new Date(),
          endDate: new Date(),
          images: null,
          activities: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "milestones",
  });

  const onSubmit = (data: FormData) => {
    console.log("Milestones data:", data);
    onFinish();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-6">
            <FormField
              control={form.control}
              name={`milestones.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phase 1</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter name of asset" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name={`milestones.${index}.startDate`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild className="bg-white">
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal rounded-xl py-[20px] border-[#D0D5DD]",
                              !field.value && "text-gray-300"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CIcon
                              size={16}
                              color="#555555"
                              className="ml-auto h-4 w-4 opacity-50"
                            />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white" align="start">
                        <Calendar
                          mode="single"
                          className="bg-whit"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`milestones.${index}.endDate`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild className="bg-white">
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal rounded-xl py-[20px] border-[#D0D5DD]",
                              !field.value && "text-gray-300"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CIcon
                              size={16}
                              color="#555555"
                              className="ml-auto h-4 w-4 opacity-50"
                            />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white" align="start">
                        <Calendar
                          mode="single"
                          className="bg-whit"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name={`milestones.${index}.images`}
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
                        onChange={(e) => field.onChange(e.target.files)}
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

            <FormField
              control={form.control}
              name={`milestones.${index}.activities`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activities</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Tell us the activities involved for this project/Milestone"
                      className="h-[138px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.length > 1 && (
              <a
                className="flex justify-end items-center gap-2 text-sm text-[#666666]"
                href="#"
                onClick={() => remove(index)}
              >
                <CloseCircle color="#666666" size={14} />
                <span>Remove</span>
              </a>
            )}
          </div>
        ))}

        <Button
          type="button"
          className="bg-[#F4F4F5] border-[#E7E9F1] text-[#667085] rounded-full"
          onClick={() => {
            append({
              name: "",
              startDate: new Date(),
              endDate: new Date(),
              images: null,
              activities: "",
            });
            setTimeout(() => {
              const formElement = document.querySelector("form");
              if (formElement) {
            formElement.scrollTo({
              top: formElement.scrollHeight,
              behavior: "smooth",
            });
              }
            }, 0);
          }}
        >
          + Add New Milestone
        </Button>

        <div className="flex gap-3 justify-end items-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => onPrevious()}
            className="rounded-full border-gray-400 text-gray-00"
          >
            Back
          </Button>
          <Button type="submit" className="rounded-full">
            Save & Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default MilestonesForm;

// export function Milestone({
//   onFinish,
//   onPrevious,
// }: {
//   onFinish: () => void;
//   onPrevious: () => void;
// }) {
//   const form = useForm<MilestoneValues>({
//     resolver: zodResolver(pricingSchema),
//     defaultValues: {
//       //   price,
//       //   unitAvailable: 5000,
//       //   maxPerIndividual: 50,
//       //   valuation: {
//       //     entry: 0,
//       //     mid: 0,
//       //     exit: 0,
//       //   },
//     },
//   });

//   const onSubmit = (data: MilestoneValues) => {
//     console.log("Form submitted: ", data);
//     onFinish();
//   };

//   return (
//     <FormProvider {...form}>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <FormField
//               control={form.control}
//               name="price"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Unit Price (ppu)</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       placeholder="NGN 0.00"
//                       type="number"
//                       isNumber={true}
//                       step="0.01"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="flex gap-3">
//               <FormField
//                 control={form.control}
//                 name="unitAvailable"
//                 render={({ field }) => (
//                   <FormItem className="w-full">
//                     <FormLabel>Unit Available</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         type="number"
//                         isNumber={true}
//                         placeholder="50000"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <div className="flex gap-2 items-end pb-1">
//                 <Button
//                   type="button"
//                   className="bg-black border-0 text-white"
//                   onClick={() => {
//                     const current = form.getValues("unitAvailable") || 0;
//                     form.setValue("unitAvailable", current + 1);
//                   }}
//                 >
//                   +
//                 </Button>
//                 <Button
//                   type="button"
//                   className="bg-black border-0 text-white"
//                   onClick={() => {
//                     const current = form.getValues("unitAvailable") || 0;
//                     if (current > 0) {
//                       form.setValue("unitAvailable", current - 1);
//                     }
//                   }}
//                 >
//                   -
//                 </Button>
//               </div>
//             </div>

//             <FormField
//               control={form.control}
//               name="maxPerIndividual"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Maximum Per Individual</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="number"
//                       isNumber={true}
//                       placeholder="50"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="flex items-end">
//               <Button
//                 type="button"
//                 variant="outline"
//                 className="w-full border-gray-200 bg-gray-100 rounded-full"
//               >
//                 <Calculator color="#888888" />
//                 Use calculator
//               </Button>
//             </div>
//           </div>

//           <div className="mt-4">
//             <h3 className="text-md font-medium mb-2">Valuation</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
//               <FormField
//                 control={form.control}
//                 name="valuation.entry"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Entry</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         type="number"
//                         isNumber={true}
//                         placeholder="NGN 0.00"
//                         step="0.01"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="valuation.mid"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Mid</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         type="number"
//                         isNumber={true}
//                         placeholder="NGN 0.00"
//                         step="0.01"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="valuation.exit"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Exit</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         type="number"
//                         isNumber={true}
//                         placeholder="NGN 0.00"
//                         step="0.01"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 justify-end items-center">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => onPrevious()}
//               className="rounded-full border-gray-400 text-gray-00"
//             >
//               Back
//             </Button>
//             <Button type="submit" className="rounded-full">
//               Save & Continue
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </FormProvider>
//   );
// }
