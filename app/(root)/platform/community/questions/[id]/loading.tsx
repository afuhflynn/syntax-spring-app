import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function QuestionLoading() {
  return (
    <div className="container py-6 max-w-4xl">
      <div className="mb-6">
        <Skeleton className="h-8 w-32 mb-4" />

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>

              <div className="flex-1 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-16" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16 mt-1" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>

      <div className="space-y-6">
        {[1, 2].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-4 w-6" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div>
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-32 mt-1" />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Skeleton className="h-6 w-32 mb-4" />
        <Card>
          <CardContent className="p-4">
            <Skeleton className="h-[200px] w-full" />
          </CardContent>
          <CardHeader className="border-t px-6 py-4 flex justify-end">
            <Skeleton className="h-10 w-32" />
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
