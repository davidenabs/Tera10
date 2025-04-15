import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Add,
  Calendar as CIcon,
  CloseCircle,
  Edit2,
  Trash,
} from "iconsax-react";
import { cn } from "@/lib/utils";
import { milestonesFormSchema } from "@/schemas/add-asset-schema";
import { formatDateRange } from "@/utils/string";

// Define milestone interface
interface MilestoneProps {
  id: string;
  phase: string;
  title: string;
  startDate: Date;
  endDate: Date;
  activities?: string;
  images?: FileList | null;
}

type FormData = z.infer<typeof milestonesFormSchema>;

const MilestonesForm = ({
  onFinish,
  onPrevious,
}: {
  onFinish: () => void;
  onPrevious: () => void;
}) => {
  // State for milestones list
  const [milestones, setMilestones] = useState<MilestoneProps[]>([
    {
      id: "1",
      phase: "Phase 1",
      title: "Project Initiation",
      startDate: new Date("2025-02-01"),
      endDate: new Date("2025-02-15"),
    },
  ]);

  // State to track if we're in edit mode and which milestone is being edited
  const [editingMilestoneId, setEditingMilestoneId] = useState<string | null>(
    null
  );

  // Setup form with zod resolver
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

  // Generate a unique ID
  const generateId = () => {
    return Date.now().toString();
  };

  // Handle form submission
  const onSubmit = (data: FormData) => {
    // Process the milestone being edited or create a new one
    if (editingMilestoneId) {
      // Update existing milestone
      const currentMilestone = data.milestones[0];
      setMilestones((prev) =>
        prev.map((milestone) =>
          milestone.id === editingMilestoneId
            ? {
                ...milestone,
                phase: currentMilestone.name,
                title: currentMilestone.name,
                startDate: currentMilestone.startDate,
                endDate: currentMilestone.endDate,
                activities: currentMilestone.activities,
                images: currentMilestone.images,
              }
            : milestone
        )
      );

      // Reset form and exit edit mode
      setEditingMilestoneId(null);
      form.reset({
        milestones: [
          {
            name: "",
            startDate: new Date(),
            endDate: new Date(),
            images: null,
            activities: "",
          },
        ],
      });
    } else {
      // Add all new milestones from the form
      const newMilestones = data.milestones.map((formMilestone) => ({
        id: generateId(),
        phase: formMilestone.name,
        title: formMilestone.name,
        startDate: formMilestone.startDate,
        endDate: formMilestone.endDate,
        activities: formMilestone.activities,
        images: formMilestone.images,
      }));

      setMilestones((prev) => [...prev, ...newMilestones]);

      // Reset form
      form.reset({
        milestones: [
          {
            name: "",
            startDate: new Date(),
            endDate: new Date(),
            images: null,
            activities: "",
          },
        ],
      });
    }

    console.log("Milestones data:", data);
    // Only finish the process if requested by user
    if (data.finish) {
      onFinish();
    }
  };

  // Handle editing a milestone
  const handleEditMilestone = (id: string) => {
    const milestoneToEdit = milestones.find((m) => m.id === id);

    if (milestoneToEdit) {
      setEditingMilestoneId(id);

      // Clear current form fields and set the editing milestone data
      while (fields.length > 0) {
        remove(0);
      }

      append({
        name: milestoneToEdit.phase,
        startDate: milestoneToEdit.startDate,
        endDate: milestoneToEdit.endDate,
        images: milestoneToEdit.images || null,
        activities: milestoneToEdit.activities || "",
      });

      // Scroll to form
      setTimeout(() => {
        const formElement = document.querySelector("form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Handle deleting a milestone
  const handleDeleteMilestone = (id: string) => {
    setMilestones((prev) => prev.filter((milestone) => milestone.id !== id));

    // If we're currently editing this milestone, reset the form
    if (editingMilestoneId === id) {
      setEditingMilestoneId(null);
      form.reset({
        milestones: [
          {
            name: "",
            startDate: new Date(),
            endDate: new Date(),
            images: null,
            activities: "",
          },
        ],
      });
    }
  };

  // Add a new empty milestone form field
  const handleAddNewMilestoneField = () => {
    append({
      name: "",
      startDate: new Date(),
      endDate: new Date(),
      images: null,
      activities: "",
    });

    // Scroll to bottom of form
    setTimeout(() => {
      const formElement = document.querySelector("form");
      if (formElement) {
        formElement.scrollTo({
          top: formElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingMilestoneId(null);
    form.reset({
      milestones: [
        {
          name: "",
          startDate: new Date(),
          endDate: new Date(),
          images: null,
          activities: "",
        },
      ],
    });
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div
          className={cn(
            {
              "grid grid-cols-1 md:grid-cols-2 gap-8": milestones.length < 2,
            },
            "items-center"
          )}
        >
          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-3 gap-2 overflow-auto w-full h-100">
            {milestones.map((milestone) => (
              <Card
                key={milestone.id}
                className="mb-4 p-2 shadow-none border-gray-200 border w-full !min-w-[327px] h-[282px]"
              >
                <CardContent className="p-2">
                  <div className="mb-2">
                    <div className="h-32 bg-gray-100 rounded-xl"></div>
                  </div>

                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-slate-700">
                      {milestone.phase}
                    </h3>
                    <div className="flex gap-">
                      <Button
                        variant="ghost"
                        onClick={() => handleDeleteMilestone(milestone.id)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Trash size={24} color="#667085" />
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleEditMilestone(milestone.id)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Edit2 size={24} color="#667085" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-4">
                    {milestone.title}
                  </p>

                  <div className="text-gray-500 font-medium text-sm self-baseline">
                    {formatDateRange(milestone.startDate, milestone.endDate)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Add New Milestone Card */}
          {milestones.length > 0 && (
            <div className="flex flex-col items-center justify-center self-center">
              <div className="text-center mb-3">
                <h2 className="text-lg font-thin text-gray-700 mb-2">
                  Add another milestone to keep
                  <br /> your project on track
                </h2>
              </div>

              <Button
                type="button"
                className="bg-[#F4F4F5] border-[#E7E9F1] text-[#667085] rounded-full"
                onClick={handleAddNewMilestoneField}
              >
                <Add size={16} color="#777777" /> Add New Milestone
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="my-8 h-px bg-gray-200" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {editingMilestoneId && (
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-700 font-medium">
                Editing milestone:{" "}
                {milestones.find((m) => m.id === editingMilestoneId)?.phase}
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleCancelEdit}
                  className="ml-4 text-blue-700 hover:text-blue-900"
                >
                  Cancel Edit
                </Button>
              </p>
            </div>
          )}

          {fields.map((field, index) => (
            <div key={field.id} className="space-y-6 max-w-3xl mx-auto">
              <FormField
                control={form.control}
                name={`milestones.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phase Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter name of milestone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name={`milestones.${index}.startDate`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild className="bg-white">
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal rounded-xl py-5 border-gray-300",
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
                        <PopoverContent
                          className="w-auto p-0 bg-white"
                          align="start"
                        >
                          <Calendar
                            mode="single"
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
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild className="bg-white">
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal rounded-xl py-5 border-gray-300",
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
                        <PopoverContent
                          className="w-auto p-0 bg-white"
                          align="start"
                        >
                          <Calendar
                            mode="single"
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
                          id={`files-${index}`}
                          type="file"
                          accept=".jpg,.jpeg,.png,.gif"
                          multiple
                          hidden
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                        <label
                          htmlFor={`files-${index}`}
                          className="border rounded-xl border-gray-400 font-medium p-2 text-sm cursor-pointer hover:bg-gray-50"
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
                        className="h-32"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  className="flex items-center gap-1 text-sm text-gray-600"
                  onClick={() => remove(index)}
                >
                  <CloseCircle color="#666666" size={14} />
                  <span>Remove</span>
                </Button>
              )}
            </div>
          ))}

          {/* {!editingMilestoneId && (
            <Button
              type="button"
              className="bg-gray-100 border-gray-200 text-gray-700 rounded-full"
              onClick={handleAddNewMilestoneField}
            >
              + Add New Milestone
            </Button>
          )} */}

          <Button
            type="submit"
            className="rounded-full"
            onClick={() => {
              form.setValue("finish", true);
            }}
          >
            Save & Continue
          </Button>

          <div className="flex gap-3 justify-end items-center mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={onPrevious}
              className="rounded-full border-gray-400 text-gray-700"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="rounded-full"
              onClick={onFinish}
            >
              Continue
            </Button>
            <input type="hidden" {...form.register("finish")} />
          </div>
        </form>
      </Form>
    </>
  );
};

export default MilestonesForm;