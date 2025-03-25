export type ReceivedProps = Record<string, any>;

const useBlog = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useBlog>;

export default useBlog;
