export type ReceivedProps = Record<string, any>;

const useUser = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useUser>;

export default useUser;
