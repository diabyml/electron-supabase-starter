import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import supabase from "@/lib/supabase";

const formSchema = z.object({
  name: z.string(),
});

export default function TestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);

      const { data, error } = await supabase
        .from("test")
        .insert([{ name: values.name }])
        .select();
      console.log(data);
    } catch (error) {
      console.error("Une erreur est survenue", error);
      toast.error("Une erreur est survenue");
    }
  }

  return (
    <div className="w-[200px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input
                    className="h-8"
                    placeholder="Paracetamol"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>nom du produit</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Ajouter</Button>
        </form>
      </Form>
    </div>
  );
}
