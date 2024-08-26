// label type을 username이나 password와 같은 타입으로 정의해버리면 email, phonenum 등 다른 타입을 쓰는 경우에는 확장성이 떨어져버림
// 계속 업데이트를 해줘야 하기 때문에 !! -> 그래서 그냥 string으로 두는게 확장성 면에서 좋다
interface LabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
