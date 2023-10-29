"use client";

import { useState, useEffect } from "react";
import { addComment, getFeedback, updateNotification } from "@/utils/api";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Skeleton, Input } from "@mantine/core";
import { BiTime } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineComment, AiOutlineSend } from "react-icons/ai";

const FeedbackPage = ({ params }: { params: { slug: number } }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    updateNotification({
      id: params.slug,
      data: true,
    });
  }, []);

  const query = useQuery({
    queryKey: ["feedback", params.slug],
    queryFn: () => getFeedback(params.slug),
  });

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      setComment("");
    },
  });

  const notificationMutation = useMutation({
    mutationFn: updateNotification,
  });

  const getDate = (date: string) => {
    const d = new Date(date);
    return d.toDateString();
  };

  const updateComment = () => {
    mutation.mutate({
      id: params.slug,
      data: comment,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:px-24">
      <div className="w-full">
        {query.isLoading ? (
          <>
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={20} radius="xl" />
            <Skeleton height={20} mt={6} radius="xl" />
            <Skeleton height={20} mt={6} width="70%" radius="xl" />
          </>
        ) : (
          <div className="mt-10 md:px-20 flex flex-col gap-5">
            <section className="text-5xl md:text-7xl">📜</section>
            <section className="flex flex-col gap-5 mt-10">
              <h1 className="text-2xl md:text-4xl font-semibold">
                {query.data?.title}
              </h1>
              <p className="w-full flex items-center gap-3">
                <span className="text-gray-500">
                  <BiTime />
                </span>
                <span className="text-gray-500"> Created: </span>
                {getDate(query.data?.createdAt)}
              </p>
              <p className="flex gap-3 md:w-4/5">
                <span className="text-gray-500">
                  <VscFeedback />
                </span>
                <span className="text-gray-500"> Feedback: </span>
                {query.data?.content}
              </p>
            </section>
            <hr />
            <section>
              <h1 className="text-xl font-semibold text-gray-500 flex items-center gap-3">
                <AiOutlineComment />
                Comments
              </h1>
              <div className="flex flex-col gap-5 mt-5">
                {query.data?.comments.map((comment: String, i: number) => (
                  <div className="flex flex-col gap-5" key={i}>
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-8 p-3 md:h-10 md:w-10 bg-gray-200 rounded-full" />
                      <div className="text-gray-500">
                        <p className="text-xs">Anonymous</p>
                        <p className="text-black">{comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 p-3 md:h-10 md:w-10 bg-gray-200 rounded-full" />
                    <div className="text-gray-500 w-3/4">
                      {mutation.isPending ? (
                        <Input
                          placeholder="Add a Comment..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          disabled
                        />
                      ) : (
                        <Input
                          placeholder="Add a Comment..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      )}
                    </div>
                    <button
                      className="text-white bg-blue-400 p-3 items-center font-bold rounded-full"
                      onClick={updateComment}
                    >
                      <AiOutlineSend />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <hr />
          </div>
        )}
      </div>
    </main>
  );
};

export default FeedbackPage;
