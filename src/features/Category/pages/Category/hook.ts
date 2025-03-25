export type ReceivedProps = Record<string, any>;

const useCategory = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useCategory>;

export default useCategory;
