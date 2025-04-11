import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
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
import { pricingSchema } from "@/schemas/add-asset-schema";
import { Calculator } from "iconsax-react";

type PricingFormValues = z.infer<typeof pricingSchema>;

export function PricingForm({
  onFinish,
  onPrevious,
}: {
  onFinish: () => void;
  onPrevious: () => void;
}) {
  const form = useForm<PricingFormValues>({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
    //   price,
    //   unitAvailable: 5000,
    //   maxPerIndividual: 50,
    //   valuation: {
    //     entry: 0,
    //     mid: 0,
    //     exit: 0,
    //   },
    },
  });

  const onSubmit = (data: PricingFormValues) => {
    console.log("Form submitted: ", data);
    onFinish();
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Price (ppu)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="NGN 0.00"
                      type="number"
                      isNumber={true}
                      step="0.01"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="unitAvailable"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Unit Available</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" isNumber={true} placeholder="50000" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 items-end pb-1">
                <Button
                  type="button"
                  className="bg-black border-0 text-white"
                  onClick={() => {
                    const current = form.getValues("unitAvailable") || 0;
                    form.setValue("unitAvailable", current + 1);
                  }}
                >
                  +
                </Button>
                <Button
                  type="button"
                  className="bg-black border-0 text-white"
                  onClick={() => {
                    const current = form.getValues("unitAvailable") || 0;
                    if (current > 0) {
                      form.setValue("unitAvailable", current - 1);
                    }
                  }}
                >
                  -
                </Button>
              </div>
            </div>

            <FormField
              control={form.control}
              name="maxPerIndividual"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Per Individual</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" isNumber={true} placeholder="50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-end">
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-200 bg-gray-100 rounded-full"
              >
                <Calculator color="#888888" />
                Use calculator
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-medium mb-2">Valuation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="valuation.entry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entry</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        isNumber={true}
                        placeholder="NGN 0.00"
                        step="0.01"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="valuation.mid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mid</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        isNumber={true}
                        placeholder="NGN 0.00"
                        step="0.01"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="valuation.exit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exit</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        isNumber={true}
                        placeholder="NGN 0.00"
                        step="0.01"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

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
    </FormProvider>
  );
}
