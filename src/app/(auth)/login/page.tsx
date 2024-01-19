import AuthForm from "@/app/(auth)/login/AuthForm";

export default function LoginPage() {
  return (
    <div className="max-w-lg mx-auto shadow-xl p-4 rounded">
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}
