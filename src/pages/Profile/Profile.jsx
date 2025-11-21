import Sidebar from "../../components/Sidebar/Sidebar";
import UserProfileContainer from "../../components/UserProfileContainer/UserProfileContainer";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Badge from "../../components/Badge/Badge";

const Profile = () => {
  return (
    <div className="flex flex-row h-screen overflow-x-auto w-full bg-(--color---color-fondo-blanco)">
      <Sidebar />

      <div className="flex flex-col h-screen w-[80%] p-4 gap-4">
        <div className="flex flex-row items-center justify-between w-full py-4">
          <p className="font-bold text-2xl text-(--color-violet-blue)">
            Mi perfil
          </p>
          <UserProfileContainer
            image="https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg"
            name="Ana María Muñoz"
            label="Diseñadora UX/UI"
          />
        </div>

        <div className="w-full h-[25%] rounded-2xl px-4 bg-(--color-alice-blue) shadow-sm">
          <AvatarCard
            image="https://i.pinimg.com/1200x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg"
            name="Ana María Muñoz"
            rol="Diseñador UX/UI"
            lugar="Cali, Colombia"
          />
        </div>

        <div className="flex flex-row h-auto gap-5">
          <div className="flex flex-col w-[80%] gap-3 h-auto">
            <div className="bg-(--color-alice-blue) p-5 rounded-2xl shadow-sm">
              <p className="text-lg font-bold">Biografía</p>
              <p className="text-sm">
                Soy una persona curiosa, creativa y con un gran interés por
                entender cómo piensan y sienten los demás. Me motiva crear
                soluciones que mejoren la forma en que las personas interactúan
                con su entorno, buscando siempre el equilibrio entre
                funcionalidad y estética. Me gusta observar, investigar y
                transformar ideas en experiencias que generen conexión, emoción
                y propósito.
              </p>
            </div>
            <div className="flex flex-col bg-(--color-alice-blue) shadow-sm p-5 gap-3 rounded-2xl">
              <p className="font-bold">Destacados</p>
              <div className="flex flex-row gap-5">
                <FeatureCard
                  titule="User-Centered Expert"
                  text="Apasionada por entender las necesidades reales de los usuarios y crear soluciones que conecten emocionalmente y generen valor."
                ></FeatureCard>
                <FeatureCard
                  titule="User-Centered Expert"
                  text="Apasionada por entender las necesidades reales de los usuarios y crear soluciones que conecten emocionalmente y generen valor."
                ></FeatureCard>
              </div>
              <p className="font-bold">Habilidades principales</p>
              <div className="flex flex-row w-full gap-1">
                <Badge text="Diseño UX"></Badge>
                <Badge text="Diseño UI"></Badge>
                <Badge text="Figma"></Badge>
                <Badge text="Investigación"></Badge>
                <Badge text="Prototipado"></Badge>
              </div>
              <p className="font-bold">Idiomas</p>
              <div className="flex flex-row w-full gap-1">
                <Badge text="Español"></Badge>
                <Badge text="Inglés"></Badge>
                <Badge text="Portugués"></Badge>
              </div>
            </div>
          </div>
          <div className="w-[20%] bg-(--color-alice-blue) shadow-sm p-5 rounded-2xl">
            <p className="text-lg font-bold">Mis recursos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
