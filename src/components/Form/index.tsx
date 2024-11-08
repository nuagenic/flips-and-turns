type FormProps = {
  updateItemAction: (formData: FormData) => void;
};

export default function Form({ updateItemAction }: FormProps) {
  return (
    <form action={updateItemAction}>
      <input type="text" name="email" placeholder="email" />
      <button type="submit">확인</button>
    </form>
  );
}
