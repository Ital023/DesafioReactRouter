type Props = {
  content: string;
};

export default function HomeBodyContent({ content }: Props) {
  return (
    <div className="drr-container drr-mt-20">
      <h2>{content}</h2>
    </div>
  );
}
