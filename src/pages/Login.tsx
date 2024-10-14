import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react"

export const Login = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
        <IonTitle>
          Login
        </IonTitle>
        </IonToolbar>

      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form>
              <IonInput label="Email" labelPlacement="floating" type="email" fill="outline" />
              <IonInput label="Password" labelPlacement="floating" type="password" fill="outline" className="ion-margin-top" />
              <IonButton type="submit" expand="block" className="ion-margin-top">Login</IonButton>
              <IonButton  expand="block" className="ion-margin-top" color={"secondary"}>Create Account</IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}