import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

import TableSessions from "@/components/Admin/TableSessions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DialogCreateSession from "@/components/Admin/DialogCreateSession";

export default function SessionsSection() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {/* <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger> */}
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Dialog>
                  <DialogTrigger>
                    <Button className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Ajouter une séance
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogCreateSession />
                </Dialog>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Séances</CardTitle>
                </CardHeader>
                <CardContent>
                  <TableSessions />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
