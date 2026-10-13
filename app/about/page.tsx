import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2 overflow-auto">
        <p>
          Kata are taught at the dojo by our sensei. Then often, we try to
          repeat them at home, either in real, or mentally. During that process,
          it often happens that the we hit blanks such as "what come after this
          motion ?", or "was the hand closed or opened in that motion ?".
        </p>
        <p>
          Some of us use the books that very famous senseis generously left us
          to answer those questions. Others use the multiple ressources scatered
          on the internet that other passionated senseis and sempais provided
          for us.
        </p>
        <p>
          However what stroke me as a partitionner is that there is no
          centralized numerical place to answer those questions. This is the
          reason of being of this website. It is not meant to replace your dojo,
          nor your sensei, just to help you in your day to day practise to study
          your katas.{" "}
        </p>
      </CardContent>
    </Card>
  );
}
