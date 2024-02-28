"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";
import { createProject } from "@/lib/actions/project.action";

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Project Name must be at least 2 characters" })
    .max(50),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(100),
  file: z.string().min(1, { message: "File must be at least one character" }),
});

const Project = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSubmitting, setisSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      file: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisSubmitting(true);

    try {
      await createProject({
        title: values.title,
        description: values.description,
        file: values.file,
        path: pathname,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Project Name<span className="text-orange-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="no-focus border-blue-100"
                  placeholder="Your username"
                  {...field}
                />
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
              <FormLabel>
                Description<span className="text-orange-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="no-focus border-blue-100"
                  placeholder="Description"
                  {...field}
                />
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
              <FormLabel>
                Description<span className="text-orange-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="no-focus border-blue-100"
                  placeholder="Description"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="items-center flex justify-center pb-4">
          <Button type="submit">
            {isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Project;
