import { useState, useEffect } from "react";

import { getSession } from "@/utils/sessions";
import { Session } from "@/utils/types";
import { InfosSessionsDialogProps } from "@/utils/props";

import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel
} from "@/components/ui/alert-dialog";

const InfosSessionsDialog: React.FC<InfosSessionsDialogProps> = ({ sessionId }) => {
  const [data, setData] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const data = await getSession(sessionId);
      console.log(data);
      setData(data);
    };

    fetchSession();
  }, [sessionId]);

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Détails de la séance</AlertDialogTitle>
        <AlertDialogDescription>
          {data ? (
            <>
              <p>Prénom : {data.firstName}</p>
              <p>Nom : {data.lastName}</p>
              <p>Email : {data.email}</p>
              <p>Date : {new Date(data.date).toLocaleDateString()}</p>
            </>
          ) : (
            "Chargement des détails de la séance..."
          )}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Fermer</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default InfosSessionsDialog;
