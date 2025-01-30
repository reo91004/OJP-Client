'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

//Use https://ui.shadcn.com/docs/components/form as reference
const formSchema = z.object({
  problemsAns: z.number().array(),
});

//Use https://ui.shadcn.com/docs/components/form as reference

export default function Page() {
  //Use https://ui.shadcn.com/docs/components/form as reference
  // 1. Define problems form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problemsAns: Array(30).fill(0),
    },
  });

  // 2. Define a submit handler.

  function onSubmit(values: z.infer<typeof formSchema>) {
    //Do something with the form values.
    // This will be type-safe and validated.

    console.log(values.problemsAns);
  }

  return (
    <div>
      {/* title of service page */}
      <section className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>문제추천</h1>
      </section>
      {/* input user answer of problems */}

      <section>
        <Card>
          <CardHeader>선택과목 입력</CardHeader>
          <CardDescription>
            현재 확률과 통계, 미적분만 지원됩니다.
          </CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
              <div className='grid grid-cols-6 gap-4'>
                  {[...Array(30)].map((_, i) => (
                    <FormField
                      key={i}
                      control={form.control}
                      // name="problemsAns.{i}" references the i-th element of problemsAns
                      name={`problemsAns.${i}`}
                      render={({ field }) => (
                        <FormItem>
                          {/* Label each input "Q1", "Q2", etc. */}
                          <FormLabel>{`Q${i + 1}`}</FormLabel>
                          <FormControl>
                            <Input
                              // Make it numeric
                              type='number'
                              // Bind the RHF field
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>

      {/* show recommand problems based on user input */}
      <section></section>
    </div>
  );
}
