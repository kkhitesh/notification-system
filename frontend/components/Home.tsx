"use client";

import { getAllFeedbacks } from "@/utils/api";
import { Paper, Badge, Button, Skeleton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Feedback {
  id: string;
  title: string;
  content: string;
  comments: string[];
}

export const HomePage = () => {
  const query = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getAllFeedbacks,
  });

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl font-bold">Welcome to Feedback Box</h1>
          <h4 className="text-md text-gray-500">
            Fresh Feedback awaiting yor attention.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto">
          {query.isLoading
            ? Array.from(Array(5), (_, i) => (
                <Paper shadow="sm" withBorder p="lg" key={i}>
                  <section className="flex flex-col gap-5 text-sm">
                    <Skeleton height={50} circle mb="xl" />
                    <Skeleton height={8} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} width="70%" radius="xl" />
                    <Skeleton height={8} mt={6} width="70%" radius="xl" />
                  </section>
                </Paper>
              ))
            : query.data?.map((feedback: Feedback) => (
                <Paper shadow="sm" withBorder p="lg" key={feedback.id}>
                  <section className="flex flex-col gap-5 text-sm">
                    <span className="flex items-center gap-3">
                      <Badge variant="light" color="gray">
                        0 ▲
                      </Badge>
                      <Badge variant="light" color="blue">
                        {feedback.title}
                      </Badge>
                      {/* <h4 className="font-semibold text-md text-blue-500">
                        {feedback.title}
                      </h4> */}
                    </span>
                    <p>{feedback.content}</p>
                    <p className="text-xs text-gray-500">Anonymous</p>
                  </section>
                  <Link href={`/feedback/${feedback.id}`}>
                    <section className="float-right mt-3 gap-1 flex">
                      <Button variant="light" size="xs" radius="md">
                        Reply privately
                      </Button>
                      <Button
                        variant="light"
                        color="rgba(150,150,150,1)"
                        size="xs"
                        radius="md"
                      >
                        Read
                      </Button>
                    </section>
                  </Link>
                </Paper>
              ))}

          {/* <Paper shadow="sm" withBorder p="lg">
            <section className="flex flex-col gap-5 text-sm">
              <span className="flex items-center gap-3">
                <Badge variant="light" color="gray">
                  0 ▲
                </Badge>
                <Badge variant="light" color="gray">
                  👏🏻👏🏻👏🏻
                </Badge>
              </span>
              <p>
              The mobile app is fantastic, but I'd like to see more features that are available on the web version. We're working on feature parity between mobile and web versions. Stay tuned for updates.
              </p>
              <p className="text-xs text-gray-500">Anonymous</p>
            </section>
            <section className="float-right mt-3 gap-1 flex">
              <Button variant="light" size="xs" radius="md">
                Reply privately
              </Button>
              <Button
                variant="light"
                color="rgba(150,150,150,1)"
                size="xs"
                radius="md"
              >
                Read
              </Button>
            </section>
          </Paper>

          <Paper shadow="sm" withBorder p="lg">
            <section className="flex flex-col gap-5 text-sm">
              <span className="flex items-center gap-3">
                <Badge variant="light" color="gray">
                  0 ▲
                </Badge>
                <Badge variant="light" color="gray">
                  👏🏻👏🏻👏🏻
                </Badge>
              </span>
              <p>
                Paper is the most basic ui component Use it to create cards,
                dropdowns, modals and other components that require background
                with shadow
              </p>
              <p className="text-xs text-gray-500">Anonymous</p>
            </section>
            <section className="float-right mt-3 gap-1 flex">
              <Button variant="light" size="xs" radius="md">
                Reply privately
              </Button>
              <Button
                variant="light"
                color="rgba(150,150,150,1)"
                size="xs"
                radius="md"
              >
                Read
              </Button>
            </section>
          </Paper>

          <Paper shadow="sm" withBorder p="lg">
            <section className="flex flex-col gap-5 text-sm">
              <span className="flex items-center gap-3">
                <Badge variant="light" color="gray">
                  0 ▲
                </Badge>
                <Badge variant="light" color="gray">
                  👏🏻👏🏻👏🏻
                </Badge>
              </span>
              <p>
                Paper is the most basic ui component Use it to create cards,
                dropdowns, modals and other components that require background
                with shadow
              </p>
              <p className="text-xs text-gray-500">Anonymous</p>
            </section>
            <section className="float-right mt-3 gap-1 flex">
              <Button variant="light" size="xs" radius="md">
                Reply privately
              </Button>
              <Button
                variant="light"
                color="rgba(150,150,150,1)"
                size="xs"
                radius="md"
              >
                Read
              </Button>
            </section>
          </Paper> */}
        </div>
      </div>
    </div>
  );
};
