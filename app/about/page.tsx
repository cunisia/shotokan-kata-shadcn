import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <Card className="mt-8">
      <CardContent className="flex flex-col gap-4 overflow-auto">
        <p>
          Kata are taught at the dojo by our sensei. We then often try to repeat
          them at home, whether in real life or mentally. In doing so, we often
          hit blanks such as "what comes after this motion?", or "was the hand
          closed or open in that motion?"
        </p>
        <p>
          To answer those questions, some of us turn to the books that renowned
          senseis have generously left us, others to the many resources
          scattered across the internet, provided by equally passionate senseis
          and sempais.
        </p>
        <p>
          However, what struck me as a practitioner is that there is no
          centralized digital place to answer those questions. That is the
          raison d'être of this website. It is not meant to replace your dojo or
          your sensei, just to help you in your day-to-day practice as you study
          your katas.
        </p>
        <p>Osu</p>
      </CardContent>
    </Card>
  );
}
