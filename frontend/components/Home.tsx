import { Header } from "./Header";
import { Text, Paper, Badge, Button } from "@mantine/core";

export const HomePage = () => {
  return (
    <div className="  ">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-3xl font-bold">Welcome to Feedback Box</h1>
            <h4 className="text-md text-gray-500">
              Fresh Feedback awaiting yor attention.
            </h4>
          </div>
          {/* <Button variant="light" color="blue" radius="md">
            Add Feedback
          </Button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto">
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
          </Paper>
        </div>
      </div>
    </div>
  );
};
