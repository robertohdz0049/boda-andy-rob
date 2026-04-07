import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS4nONiJL4nXA1nz1sgWVbqfF6XcDPN8s",
  authDomain: "andy-y-rob.firebaseapp.com",
  projectId: "andy-y-rob",
  storageBucket: "andy-y-rob.firebasestorage.app",
  messagingSenderId: "231833524712",
  appId: "1:231833524712:web:1564d5fe6dfc0549beac5d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const DOC_REF = doc(db, "boda", "planificador");

const fmt = (n) =>
  n || n === 0
    ? "$" +
      Number(n).toLocaleString("es-MX", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    : "—";

const DEFAULT_DATA = {
  categories: [
    {
      id: "venue",
      name: "Salón / Venue",
      icon: "🏛️",
      items: [
        {
          id: 1,
          name: "Renta del salón",
          note: "Incluye mobiliario básico",
          estimated: 80000,
          real: 0,
          status: "pending",
        },
        {
          id: 2,
          name: "Arreglo de jardín / exterior",
          note: "",
          estimated: 15000,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "catering",
      name: "Catering y Banquetes",
      icon: "🍽️",
      items: [
        {
          id: 3,
          name: "Cena por persona (aprox. 150)",
          note: "",
          estimated: 90000,
          real: 0,
          status: "pending",
        },
        {
          id: 4,
          name: "Barra de bebidas",
          note: "Open bar 5 horas",
          estimated: 35000,
          real: 0,
          status: "pending",
        },
        {
          id: 5,
          name: "Meseros / personal",
          note: "",
          estimated: 12000,
          real: 0,
          status: "pending",
        },
        {
          id: 6,
          name: "Pastel de bodas",
          note: "",
          estimated: 8000,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "foto",
      name: "Fotografía y Video",
      icon: "📸",
      items: [
        {
          id: 7,
          name: "Fotógrafo",
          note: "Cobertura completa + álbum",
          estimated: 35000,
          real: 0,
          status: "pending",
        },
        {
          id: 8,
          name: "Videógrafo / Cinematic",
          note: "Video highlight + film",
          estimated: 28000,
          real: 0,
          status: "pending",
        },
        {
          id: 9,
          name: "Sesión de preboda",
          note: "",
          estimated: 8000,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "musica",
      name: "Música y Entretenimiento",
      icon: "🎶",
      items: [
        {
          id: 10,
          name: "DJ",
          note: "Sonido + luces + set completo",
          estimated: 22000,
          real: 0,
          status: "pending",
        },
        {
          id: 11,
          name: "Música en vivo / ceremonia",
          note: "Cuarteto o solista",
          estimated: 10000,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "flores",
      name: "Decoración y Flores",
      icon: "💐",
      items: [
        {
          id: 12,
          name: "Ramo de novia",
          note: "",
          estimated: 4500,
          real: 0,
          status: "pending",
        },
        {
          id: 13,
          name: "Centros de mesa",
          note: "Aprox. 15 mesas",
          estimated: 18000,
          real: 0,
          status: "pending",
        },
        {
          id: 14,
          name: "Decoración de ceremonia",
          note: "Altar, pétalos, caminero",
          estimated: 12000,
          real: 0,
          status: "pending",
        },
        {
          id: 15,
          name: "Iluminación ambiental",
          note: "",
          estimated: 10000,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "vestimenta",
      name: "Vestimenta",
      icon: "👗",
      items: [
        {
          id: 16,
          name: "Vestido de novia",
          note: "",
          estimated: 30000,
          real: 0,
          status: "pending",
        },
        {
          id: 17,
          name: "Velo / accesorios",
          note: "",
          estimated: 5000,
          real: 0,
          status: "pending",
        },
        {
          id: 18,
          name: "Traje del novio",
          note: "",
          estimated: 12000,
          real: 0,
          status: "pending",
        },
        {
          id: 19,
          name: "Maquillaje y peinado",
          note: "Novia + prueba",
          estimated: 6000,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "ceremonia",
      name: "Ceremonia",
      icon: "💍",
      items: [
        {
          id: 20,
          name: "Iglesia / Juez civil",
          note: "",
          estimated: 8000,
          real: 0,
          status: "pending",
        },
        {
          id: 21,
          name: "Argollas de matrimonio",
          note: "",
          estimated: 15000,
          real: 0,
          status: "pending",
        },
        {
          id: 22,
          name: "Lazo, arras, cojines",
          note: "",
          estimated: 2500,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "papeleria",
      name: "Papelería y Recuerdos",
      icon: "💌",
      items: [
        {
          id: 23,
          name: "Invitaciones",
          note: "",
          estimated: 8000,
          real: 0,
          status: "pending",
        },
        {
          id: 24,
          name: "Recuerdos para invitados",
          note: "",
          estimated: 7500,
          real: 0,
          status: "pending",
        },
      ],
    },
    {
      id: "logistica",
      name: "Logística y Extras",
      icon: "🚗",
      items: [
        {
          id: 25,
          name: "Transporte novios",
          note: "",
          estimated: 5000,
          real: 0,
          status: "pending",
        },
        {
          id: 26,
          name: "Coordinadora de bodas",
          note: "",
          estimated: 15000,
          real: 0,
          status: "pending",
        },
        {
          id: 27,
          name: "Luna de miel (anticipo)",
          note: "Destino por definir",
          estimated: 40000,
          real: 0,
          status: "pending",
        },
        {
          id: 28,
          name: "Fondo de imprevistos",
          note: "5-10% del total",
          estimated: 20000,
          real: 0,
          status: "pending",
        },
      ],
    },
  ],
  checklist: [
    {
      group: "Inmediatamente (Meses 1-2)",
      items: [
        {
          id: "c1",
          text: "Definir fecha tentativa",
          note: "Disponibilidad de ambas familias",
          done: false,
          priority: "alta",
        },
        {
          id: "c2",
          text: "Establecer presupuesto global",
          note: "Con aportaciones si aplica",
          done: false,
          priority: "alta",
        },
        {
          id: "c3",
          text: "Lista de invitados (borrador)",
          note: "El número define todo lo demás",
          done: false,
          priority: "alta",
        },
        {
          id: "c4",
          text: "Visitar y reservar el venue",
          note: "Los buenos se agotan rápido",
          done: false,
          priority: "alta",
        },
        {
          id: "c5",
          text: "Contratar fotógrafo",
          note: "Son los primeros en reservarse",
          done: false,
          priority: "alta",
        },
        {
          id: "c6",
          text: "Contratar videógrafo",
          note: "",
          done: false,
          priority: "alta",
        },
      ],
    },
    {
      group: "Primeros 4 meses",
      items: [
        {
          id: "c7",
          text: "Cotizar catering / banquetes",
          note: "Hacer cata de menú",
          done: false,
          priority: "alta",
        },
        {
          id: "c8",
          text: "Buscar vestido de novia",
          note: "Requiere meses para confección",
          done: false,
          priority: "alta",
        },
        {
          id: "c9",
          text: "Definir tipo de ceremonia",
          note: "Civil / religiosa",
          done: false,
          priority: "alta",
        },
        {
          id: "c10",
          text: "Cotizar decoración y floristería",
          note: "",
          done: false,
          priority: "media",
        },
        {
          id: "c11",
          text: "Buscar DJ / música en vivo",
          note: "",
          done: false,
          priority: "media",
        },
        {
          id: "c12",
          text: "Decidir paleta de colores / temática",
          note: "",
          done: false,
          priority: "media",
        },
        {
          id: "c13",
          text: "Abrir mesa de regalos",
          note: "Liverpool, El Palacio, etc.",
          done: false,
          priority: "baja",
        },
      ],
    },
    {
      group: "4-8 meses antes",
      items: [
        {
          id: "c14",
          text: "Diseño y envío de invitaciones",
          note: "",
          done: false,
          priority: "alta",
        },
        {
          id: "c15",
          text: "Confirmación de invitados (RSVP)",
          note: "",
          done: false,
          priority: "alta",
        },
        {
          id: "c16",
          text: "Contratar maquillista / estilista",
          note: "Hacer prueba con tiempo",
          done: false,
          priority: "media",
        },
        {
          id: "c17",
          text: "Sesión de fotos de preboda",
          note: "",
          done: false,
          priority: "baja",
        },
        {
          id: "c18",
          text: "Elegir y ajustar traje del novio",
          note: "",
          done: false,
          priority: "media",
        },
        {
          id: "c19",
          text: "Coordinar hospedaje invitados foráneos",
          note: "",
          done: false,
          priority: "baja",
        },
        {
          id: "c20",
          text: "Elegir pastel y hacer degustación",
          note: "",
          done: false,
          priority: "media",
        },
      ],
    },
    {
      group: "1-3 meses antes",
      items: [
        {
          id: "c21",
          text: "Confirmar todos los proveedores",
          note: "Revisar contratos y pagos",
          done: false,
          priority: "alta",
        },
        {
          id: "c22",
          text: "Itinerario detallado del día",
          note: "Maquillaje, traslados, ceremonia, recepción",
          done: false,
          priority: "alta",
        },
        {
          id: "c23",
          text: "Prueba de vestido final",
          note: "",
          done: false,
          priority: "alta",
        },
        {
          id: "c24",
          text: "Lista de canciones / momentos especiales",
          note: "Vals, entrada, brindis",
          done: false,
          priority: "media",
        },
        {
          id: "c25",
          text: "Comprar argollas",
          note: "",
          done: false,
          priority: "alta",
        },
        {
          id: "c26",
          text: "Planear luna de miel",
          note: "Reservas de vuelo y hotel",
          done: false,
          priority: "media",
        },
      ],
    },
    {
      group: "Semana de la boda",
      items: [
        {
          id: "c27",
          text: "Reconfirmar hora y lugar con cada proveedor",
          note: "",
          done: false,
          priority: "alta",
        },
        {
          id: "c28",
          text: "Pago final de todos los servicios",
          note: "",
          done: false,
          priority: "alta",
        },
        {
          id: "c29",
          text: "Delegar responsabilidades del día",
          note: "Padrinos / familia",
          done: false,
          priority: "media",
        },
        {
          id: "c30",
          text: "Descansar y disfrutar ✨",
          note: "Ya todo está listo",
          done: false,
          priority: "baja",
        },
      ],
    },
  ],
  vendors: [],
  invitados: [
    {
      id: "i1",
      nombre: "Fam. Hernandez Ramirez",
      boletos: 4,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i2",
      nombre: "Fam. Hernandez Lozano (Pa)",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i3",
      nombre: "Fam. Hernandez Vallad. (Rob)",
      boletos: 8,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i4",
      nombre: "Fam. Hernandez Rojas",
      boletos: 4,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i5",
      nombre: "Fam. Hernandez Monroy",
      boletos: 11,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i6",
      nombre: "Fam. Hernandez Vallad. (Gera)",
      boletos: 6,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i7",
      nombre: "Fam. Hernandez Lozano Pilar",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i8",
      nombre: "Fam. Hernandez Lozano Rosa",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i9",
      nombre: "Denisse Hernandez Rojas",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i10",
      nombre: "Khaled Daruich",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i11",
      nombre: "Paola Carrasco",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i12",
      nombre: "Ana L. Limon",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i13",
      nombre: "Luis Bautista",
      boletos: 4,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i14",
      nombre: "Federico G.",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i15",
      nombre: "Daniel Sanchez",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i16",
      nombre: "Daniel Avila",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i17",
      nombre: "Karla Benitez",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i18",
      nombre: "Juan Pablo Flores",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i19",
      nombre: "Caro S.",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i20",
      nombre: "Stefano",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i21",
      nombre: "Antoine",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i22",
      nombre: "Manuel H.V.",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i23",
      nombre: "Angeles",
      boletos: 5,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i24",
      nombre: "Alejandro",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i25",
      nombre: "Vanessa G.",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i26",
      nombre: "Nayada G.",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i27",
      nombre: "Alejandro Cira",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i28",
      nombre: "Roger",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i29",
      nombre: "Mama Colombia",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i30",
      nombre: "Papa Colombia",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i31",
      nombre: "Hna. + acompanante",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i32",
      nombre: "Tio Ale + esposa + hijo",
      boletos: 3,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i33",
      nombre: "Tio Ernesto + esposa",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i34",
      nombre: "Emilia + esposo",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i35",
      nombre: "Rocio + esposo",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i36",
      nombre: "Adriana",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i37",
      nombre: "Astrid",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i38",
      nombre: "Fredy",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i39",
      nombre: "Tatiana + acompanante",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i40",
      nombre: "Abuela",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i41",
      nombre: "Tio Cesar + acompanante",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i42",
      nombre: "Johan",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i43",
      nombre: "Wilson",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i44",
      nombre: "Carolina + esposo",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "co",
      telefono: "",
    },
    {
      id: "i45",
      nombre: "Mama Jorita + acompanante",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i46",
      nombre: "Hugo + acompanante",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i47",
      nombre: "Coque + acompanante",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i48",
      nombre: "Dennis",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i49",
      nombre: "Hugo",
      boletos: 1,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
    {
      id: "i50",
      nombre: "Viviana + esposo",
      boletos: 2,
      confirmacion: "pendiente",
      mesa: "",
      origen: "mx",
      telefono: "",
    },
  ],
  padrinos: [],
  venues: [],
  citas: [],
  pagos: [],
  pinterest: {},
  timeline: [
    {
      date: "Abr–May 2026",
      title: "El arranque",
      tasks:
        "· Definir fecha y presupuesto\n· Reservar venue\n· Contratar fotógrafo y videógrafo",
      status: "active",
    },
    {
      date: "Jun–Ago 2026",
      title: "Los grandes contratos",
      tasks:
        "· Catering y banquetes\n· Vestido de novia\n· Música y DJ\n· Ceremonia definida",
      status: "",
    },
    {
      date: "Sep–Nov 2026",
      title: "Los detalles",
      tasks:
        "· Invitaciones\n· Decoración y floristería\n· Maquillista y estilista\n· Sesión preboda",
      status: "",
    },
    {
      date: "Dic 2026 – Ene 2027",
      title: "La recta final",
      tasks:
        "· RSVP confirmado\n· Prueba de vestido\n· Argollas compradas\n· Luna de miel reservada",
      status: "",
    },
    {
      date: "1 mes antes",
      title: "Últimos detalles",
      tasks: "· Itinerario del día\n· Reconfirmar proveedores\n· Pagos finales",
      status: "",
    },
    {
      date: "¡El gran día! 🎊",
      title: "Andy & Rob",
      tasks: "· Todo está listo.\n· Solo queda disfrutarlo.",
      status: "",
    },
  ],
};

let appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let saveTimeout = null;
let currentCatId = null;
let itemNextId = 200;
let rendering = false;

// ── Firebase sync ──
async function loadFromFirebase() {
  try {
    const snap = await getDoc(DOC_REF);
    if (snap.exists()) {
      appData = snap.data();
      var needsSave = false;
      if (!appData.invitados || appData.invitados.length === 0) {
        appData.invitados = DEFAULT_DATA.invitados;
        needsSave = true;
      }
      if (!appData.padrinos) {
        appData.padrinos = [];
        needsSave = true;
      }
      if (!appData.venues) {
        appData.venues = [];
        needsSave = true;
      }
      if (!appData.citas) {
        appData.citas = [];
        needsSave = true;
      }
      if (!appData.pagos) {
        appData.pagos = [];
        needsSave = true;
      }
      if (!appData.pinterest) {
        appData.pinterest = {};
        needsSave = true;
      }
      if (needsSave) await setDoc(DOC_REF, appData);
    } else {
      await setDoc(DOC_REF, appData);
    }
    setSynced();
  } catch (e) {
    setOffline();
  }
  renderAll();
  hideSplash();

  // Live listener
  onSnapshot(
    DOC_REF,
    (snap) => {
      if (snap.exists() && !rendering) {
        appData = snap.data();
        renderAll();
        setSynced();
      }
    },
    () => setOffline(),
  );
}

function scheduleSave() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      await setDoc(DOC_REF, appData);
      setSynced();
    } catch (e) {
      setOffline();
    }
  }, 800);
}

function setSynced() {
  document.getElementById("syncDot").className = "sync-dot";
  document.getElementById("syncLabel").textContent = "en línea";
}
function setOffline() {
  document.getElementById("syncDot").className = "sync-dot offline";
  document.getElementById("syncLabel").textContent = "sin conexión";
}

function hideSplash() {
  const s = document.getElementById("loading-screen");
  s.classList.add("fade-out");
  setTimeout(() => (s.style.display = "none"), 700);
}

// ── Render ──
// ── INVITADOS ──
function renderInvitados() {
  var invitados = appData.invitados || [];
  var totalBoletos = invitados.reduce(function (s, i) {
    return s + (parseInt(i.boletos) || 0);
  }, 0);
  var confirmados = invitados
    .filter(function (i) {
      return i.confirmacion === "si";
    })
    .reduce(function (s, i) {
      return s + (parseInt(i.boletos) || 0);
    }, 0);
  var sinConf = invitados
    .filter(function (i) {
      return i.confirmacion === "pendiente";
    })
    .reduce(function (s, i) {
      return s + (parseInt(i.boletos) || 0);
    }, 0);
  var noConf = invitados
    .filter(function (i) {
      return i.confirmacion === "no";
    })
    .reduce(function (s, i) {
      return s + (parseInt(i.boletos) || 0);
    }, 0);
  document.getElementById("invitadosResumen").innerHTML =
    "<div class='inv-resumen-card'><label>Total boletos</label><div class='val gold'>" +
    totalBoletos +
    "</div></div>" +
    "<div class='inv-resumen-card'><label>Confirmados</label><div class='val sage'>" +
    confirmados +
    "</div></div>" +
    "<div class='inv-resumen-card'><label>Pendientes</label><div class='val'>" +
    sinConf +
    "</div></div>" +
    "<div class='inv-resumen-card'><label>No confirman</label><div class='val danger'>" +
    noConf +
    "</div></div>";
  var confLabels = { si: "Si", no: "No", pendiente: "Pendiente" };
  var grupos = [
    {
      label: "Mexico",
      items: invitados.filter(function (i) {
        return i.origen === "mx";
      }),
    },
    {
      label: "Colombia",
      items: invitados.filter(function (i) {
        return i.origen === "co";
      }),
    },
    {
      label: "Otros",
      items: invitados.filter(function (i) {
        return i.origen === "otro";
      }),
    },
  ].filter(function (g) {
    return g.items.length > 0;
  });
  document.getElementById("invitadosContainer").innerHTML = grupos
    .map(function (g) {
      var gTotal = g.items.reduce(function (s, i) {
        return s + (parseInt(i.boletos) || 0);
      }, 0);
      return (
        "<div class='inv-table'>" +
        "<div class='inv-group-header'>" +
        g.label +
        " — " +
        gTotal +
        " boletos · " +
        g.items.length +
        " grupos</div>" +
        "<div class='inv-row inv-header'><span>Nombre</span><span>Boletos</span><span>Confirmacion</span><span>Mesa</span><span>Contacto</span><span></span></div>" +
        g.items
          .map(function (inv) {
            return (
              "<div class='inv-row'>" +
              "<div style='font-size:13px'>" +
              inv.nombre +
              "</div>" +
              "<div style='font-family:Cormorant Garamond,serif;font-size:20px;font-weight:300;color:var(--gold)'>" +
              inv.boletos +
              "</div>" +
              "<div><button class='conf-" +
              inv.confirmacion +
              "' data-id='" +
              inv.id +
              "' onclick='cycleInvConf(this.dataset.id)'>" +
              confLabels[inv.confirmacion] +
              "</button></div>" +
              "<div style='font-size:12px;color:var(--muted)'>" +
              (inv.mesa || "—") +
              "</div>" +
              "<div style='font-size:11px;color:var(--muted)'>" +
              (inv.telefono || "—") +
              "</div>" +
              "<button class='check-edit-btn' data-id='" +
              inv.id +
              "' onclick='openInvitadoModal(this.dataset.id)'>✏️</button>" +
              "</div>"
            );
          })
          .join("") +
        "</div>"
      );
    })
    .join("");
}
var _editInvId = null;
window.openInvitadoModal = function (id) {
  _editInvId = id || null;
  var inv = id
    ? (appData.invitados || []).find(function (x) {
        return x.id === id;
      })
    : null;
  document.getElementById("invModalTitle").textContent = inv
    ? "Editar invitado"
    : "Nuevo invitado";
  document.getElementById("invModalBtn").textContent = inv
    ? "Guardar"
    : "Agregar";
  document.getElementById("invDelBtn").style.display = inv ? "block" : "none";
  document.getElementById("invNombre").value = inv ? inv.nombre : "";
  document.getElementById("invBoletos").value = inv ? inv.boletos : 2;
  document.getElementById("invOrigen").value = inv ? inv.origen : "mx";
  document.getElementById("invConf").value = inv
    ? inv.confirmacion
    : "pendiente";
  document.getElementById("invMesa").value = inv ? inv.mesa : "";
  document.getElementById("invTel").value = inv ? inv.telefono : "";
  document.getElementById("invitadoModal").classList.add("open");
};
window.closeInvitadoModal = function () {
  document.getElementById("invitadoModal").classList.remove("open");
};
window.saveInvitado = function () {
  if (!appData.invitados) appData.invitados = [];
  var obj = {
    id: _editInvId || "i" + Date.now(),
    nombre: document.getElementById("invNombre").value || "Sin nombre",
    boletos: parseInt(document.getElementById("invBoletos").value) || 1,
    origen: document.getElementById("invOrigen").value,
    confirmacion: document.getElementById("invConf").value,
    mesa: document.getElementById("invMesa").value,
    telefono: document.getElementById("invTel").value,
  };
  if (_editInvId) {
    var idx = appData.invitados.findIndex(function (x) {
      return x.id === _editInvId;
    });
    if (idx >= 0) appData.invitados[idx] = obj;
    else appData.invitados.push(obj);
  } else appData.invitados.push(obj);
  closeInvitadoModal();
  renderInvitados();
  scheduleSave();
};
window.cycleInvConf = function (id) {
  var inv = (appData.invitados || []).find(function (x) {
    return x.id === id;
  });
  if (!inv) return;
  var states = ["pendiente", "si", "no"];
  inv.confirmacion =
    states[(states.indexOf(inv.confirmacion) + 1) % states.length];
  renderInvitados();
  scheduleSave();
};
document
  .getElementById("invitadoModal")
  .addEventListener("click", function (e) {
    if (e.target === e.currentTarget) closeInvitadoModal();
  });

// ── PADRINOS ──
function renderPadrinos() {
  var padrinos = appData.padrinos || [];
  var total = padrinos.reduce(function (s, p) {
    return s + (parseFloat(p.monto) || 0);
  }, 0);
  var estLabels = {
    pendiente: "Pendiente",
    confirmado: "Confirmado",
    pagado: "Pagado",
  };
  document.getElementById("padrinosResumen").innerHTML =
    "<div class='padrinos-total-bar'><div>" +
    "<div style='font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:4px'>Total patrocinado</div>" +
    "<div style='font-family:Cormorant Garamond,serif;font-size:28px;font-weight:300;color:var(--gold-light)'>" +
    fmt(total) +
    "</div></div>" +
    "<div style='font-size:11px;color:var(--muted)'>" +
    padrinos.length +
    " padrino" +
    (padrinos.length !== 1 ? "s" : "") +
    "</div></div>";
  document.getElementById("padrinosContainer").innerHTML = padrinos.length
    ? padrinos
        .map(function (p) {
          var sc =
            p.estado === "pagado"
              ? "paid"
              : p.estado === "confirmado"
                ? "confirmed"
                : "pending";
          return (
            "<div class='padrino-card'>" +
            "<div><div class='padrino-nombre'>" +
            p.nombre +
            "</div><div class='padrino-concepto'>" +
            (p.concepto || "Sin concepto") +
            (p.contacto ? " · " + p.contacto : "") +
            "</div></div>" +
            "<div class='padrino-monto'>" +
            fmt(p.monto) +
            "</div>" +
            "<button class='status-badge status-" +
            sc +
            "' data-id='" +
            p.id +
            "' onclick='cyclePadEstado(this.dataset.id)'>" +
            estLabels[p.estado] +
            "</button>" +
            "<button class='check-edit-btn' data-id='" +
            p.id +
            "' onclick='openPadrinoModal(this.dataset.id)'>✏️</button>" +
            "</div>"
          );
        })
        .join("")
    : "<div style='text-align:center;padding:30px;color:var(--muted);font-size:13px'>Aun no hay padrinos.</div>";
}
var _editPadId = null;
window.openPadrinoModal = function (id) {
  _editPadId = id || null;
  var p = id
    ? (appData.padrinos || []).find(function (x) {
        return x.id === id;
      })
    : null;
  document.getElementById("padModalTitle").textContent = p
    ? "Editar padrino"
    : "Nuevo padrino";
  document.getElementById("padModalBtn").textContent = p
    ? "Guardar"
    : "Agregar";
  document.getElementById("padDelBtn").style.display = p ? "block" : "none";
  document.getElementById("padNombre").value = p ? p.nombre : "";
  document.getElementById("padConcepto").value = p ? p.concepto : "";
  document.getElementById("padMonto").value = p ? p.monto : "";
  document.getElementById("padEstado").value = p ? p.estado : "pendiente";
  document.getElementById("padContacto").value = p ? p.contacto : "";
  document.getElementById("padrinoModal").classList.add("open");
};
window.closePadrinoModal = function () {
  document.getElementById("padrinoModal").classList.remove("open");
};
window.savePadrino = function () {
  if (!appData.padrinos) appData.padrinos = [];
  var obj = {
    id: _editPadId || "p" + Date.now(),
    nombre: document.getElementById("padNombre").value || "Sin nombre",
    concepto: document.getElementById("padConcepto").value,
    monto: parseFloat(document.getElementById("padMonto").value) || 0,
    estado: document.getElementById("padEstado").value,
    contacto: document.getElementById("padContacto").value,
  };
  if (_editPadId) {
    var idx = appData.padrinos.findIndex(function (x) {
      return x.id === _editPadId;
    });
    if (idx >= 0) appData.padrinos[idx] = obj;
    else appData.padrinos.push(obj);
  } else appData.padrinos.push(obj);
  closePadrinoModal();
  renderPadrinos();
  scheduleSave();
};
window.deletePadrino = function () {
  if (!confirm("Eliminar este padrino?")) return;
  appData.padrinos = (appData.padrinos || []).filter(function (x) {
    return x.id !== _editPadId;
  });
  closePadrinoModal();
  renderPadrinos();
  scheduleSave();
};
window.cyclePadEstado = function (id) {
  var p = (appData.padrinos || []).find(function (x) {
    return x.id === id;
  });
  if (!p) return;
  var states = ["pendiente", "confirmado", "pagado"];
  p.estado = states[(states.indexOf(p.estado) + 1) % states.length];
  renderPadrinos();
  scheduleSave();
};
document.getElementById("padrinoModal").addEventListener("click", function (e) {
  if (e.target === e.currentTarget) closePadrinoModal();
});

// ── VENUES ──
function renderVenues() {
  var venues = appData.venues || [];
  var c = document.getElementById("venuesContainer");
  if (!venues.length) {
    c.innerHTML =
      "<div style='text-align:center;padding:40px;color:var(--muted);font-size:13px'>Aun no han agregado venues.</div>";
    return;
  }
  c.innerHTML =
    "<table class='venues-table'><thead><tr><th>Venue</th><th>Ubicacion</th><th>Capacidad</th><th>Precio</th><th>Rating</th><th>Link</th><th></th></tr></thead><tbody>" +
    venues
      .map(function (v) {
        return (
          "<tr><td><div style='font-family:Cormorant Garamond,serif;font-size:16px'>" +
          v.name +
          "</div>" +
          (v.notas
            ? "<div style='font-size:10px;color:var(--muted)'>" +
              v.notas +
              "</div>"
            : "") +
          "</td><td>" +
          (v.ubicacion || "—") +
          "</td><td>" +
          (v.capacidad ? v.capacidad + " personas" : "—") +
          "</td><td>" +
          (v.precio ? fmt(v.precio) : "—") +
          "</td><td>" +
          (v.rating > 0 ? "⭐".repeat(v.rating) : "—") +
          "</td><td>" +
          (v.link
            ? "<a href='" +
              v.link +
              "' target='_blank' class='venue-link'>Ver</a>"
            : "—") +
          "</td><td><button class='check-edit-btn' data-id='" +
          v.id +
          "' onclick='openVenueModal(this.dataset.id)'>✏️</button></td></tr>"
        );
      })
      .join("") +
    "</tbody></table>";
}
var _editVenueId = null;
window.openVenueModal = function (id) {
  _editVenueId = id || null;
  var v = id
    ? (appData.venues || []).find(function (x) {
        return x.id == id;
      })
    : null;
  document.getElementById("venueModalTitle").textContent = v
    ? "Editar Venue"
    : "Nuevo Venue";
  document.getElementById("venueModalBtn").textContent = v
    ? "Guardar"
    : "Agregar";
  document.getElementById("venueDelBtn").style.display = v ? "block" : "none";
  document.getElementById("vnName").value = v ? v.name : "";
  document.getElementById("vnUbicacion").value = v ? v.ubicacion : "";
  document.getElementById("vnCapacidad").value = v ? v.capacidad : "";
  document.getElementById("vnPrecio").value = v ? v.precio : "";
  document.getElementById("vnContacto").value = v ? v.contacto : "";
  document.getElementById("vnLink").value = v ? v.link : "";
  document.getElementById("vnRating").value = v ? v.rating : 0;
  document.getElementById("vnNotas").value = v ? v.notas : "";
  document.getElementById("venueModal").classList.add("open");
};
window.closeVenueModal = function () {
  document.getElementById("venueModal").classList.remove("open");
};
window.saveVenue = function () {
  if (!appData.venues) appData.venues = [];
  var obj = {
    id: _editVenueId || "v" + Date.now(),
    name: document.getElementById("vnName").value || "Sin nombre",
    ubicacion: document.getElementById("vnUbicacion").value,
    capacidad: parseInt(document.getElementById("vnCapacidad").value) || 0,
    precio: parseFloat(document.getElementById("vnPrecio").value) || 0,
    contacto: document.getElementById("vnContacto").value,
    link: document.getElementById("vnLink").value,
    rating: parseInt(document.getElementById("vnRating").value) || 0,
    notas: document.getElementById("vnNotas").value,
  };
  if (_editVenueId) {
    var idx = (appData.venues || []).findIndex(function (x) {
      return x.id == _editVenueId;
    });
    if (idx >= 0) appData.venues[idx] = obj;
    else appData.venues.push(obj);
  } else appData.venues.push(obj);
  closeVenueModal();
  renderVenues();
  scheduleSave();
};
document.getElementById("venueModal").addEventListener("click", function (e) {
  if (e.target === e.currentTarget) closeVenueModal();
});

// ── AGENDA ──
function renderAgenda() {
  var c = document.getElementById("agendaContainer");
  var citas = (appData.citas || []).slice().sort(function (a, b) {
    return new Date(a.fecha + "T" + a.hora) - new Date(b.fecha + "T" + b.hora);
  });
  if (!citas.length) {
    c.innerHTML =
      "<div style='text-align:center;padding:40px;color:var(--muted);font-size:13px'>No hay citas agendadas.</div>";
    return;
  }
  var now = new Date();
  var meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  c.innerHTML = citas
    .map(function (ct) {
      var d = new Date(ct.fecha + "T" + ct.hora);
      var pasada = d < now;
      var hoy = d.toDateString() === now.toDateString();
      var manana =
        d.toDateString() === new Date(now.getTime() + 86400000).toDateString();
      var badge = hoy
        ? "<span style='background:#C47A6B;color:white;font-size:9px;padding:2px 8px;border-radius:10px;margin-left:8px'>Hoy</span>"
        : manana
          ? "<span style='background:#C9A84C;color:#1A1612;font-size:9px;padding:2px 8px;border-radius:10px;margin-left:8px'>Manana</span>"
          : "";
      var gcal =
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
        encodeURIComponent(ct.titulo) +
        "&dates=" +
        ct.fecha.replace(/-/g, "") +
        "T" +
        ct.hora.replace(":", "") +
        "00/" +
        ct.fecha.replace(/-/g, "") +
        "T" +
        String(parseInt(ct.hora.split(":")[0]) + 1).padStart(2, "0") +
        ct.hora.split(":")[1] +
        "00&location=" +
        encodeURIComponent(ct.lugar || "") +
        "&details=" +
        encodeURIComponent(ct.nota || "");
      return (
        "<div class='cita-card" +
        (pasada ? " cita-pasada" : "") +
        "'>" +
        "<div style='text-align:center'>" +
        "<div class='cita-dia'>" +
        d.getDate() +
        "</div>" +
        "<div class='cita-mes'>" +
        meses[d.getMonth()] +
        " " +
        d.getFullYear() +
        "</div>" +
        "<div class='cita-hora'>" +
        ct.hora +
        "</div>" +
        "</div>" +
        "<div>" +
        "<div class='cita-titulo'>" +
        ct.titulo +
        badge +
        "</div>" +
        "<div class='cita-lugar'>" +
        (ct.lugar || "—") +
        "</div>" +
        (ct.nota ? "<div class='cita-nota'>" + ct.nota + "</div>" : "") +
        (!pasada
          ? "<a href='" +
            gcal +
            "' target='_blank' style='display:inline-block;margin-top:6px;font-size:10px;color:var(--muted);text-decoration:none;border:1px solid var(--border);padding:3px 10px;border-radius:2px'>Agregar a Google Calendar</a>"
          : "") +
        "</div>" +
        "<button class='check-edit-btn' data-id='" +
        ct.id +
        "' onclick='openCitaModal(this.dataset.id)'>✏️</button>" +
        "</div>"
      );
    })
    .join("");
  var in24 = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  var proximas = citas.filter(function (ct) {
    var d = new Date(ct.fecha + "T" + ct.hora);
    return d >= now && d <= in24;
  });
  if (proximas.length && !sessionStorage.getItem("alertShown")) {
    sessionStorage.setItem("alertShown", "1");
    setTimeout(function () {
      var banner = document.createElement("div");
      banner.style.cssText =
        "position:fixed;top:0;left:0;right:0;z-index:9998;background:#C9A84C;color:#1A1612;padding:12px 20px;display:flex;align-items:center;justify-content:space-between;font-family:DM Mono,monospace;font-size:12px;letter-spacing:1px";
      banner.innerHTML =
        "Tienes " +
        proximas.length +
        " cita" +
        (proximas.length > 1 ? "s" : "") +
        " proximas: " +
        proximas
          .map(function (ct) {
            return ct.titulo;
          })
          .join(", ") +
        "<button onclick='this.parentElement.remove()' style='background:none;border:none;font-size:18px;cursor:pointer;color:#1A1612'>x</button>";
      document.body.prepend(banner);
    }, 1500);
  }
}
var _editCitaId = null;
window.openCitaModal = function (id) {
  _editCitaId = id || null;
  var ct = id
    ? (appData.citas || []).find(function (x) {
        return x.id === id;
      })
    : null;
  document.getElementById("citaModalTitle").textContent = ct
    ? "Editar Cita"
    : "Nueva Cita";
  document.getElementById("citaModalBtn").textContent = ct
    ? "Guardar"
    : "Agendar";
  document.getElementById("citaDelBtn").style.display = ct ? "block" : "none";
  document.getElementById("ctTitulo").value = ct ? ct.titulo : "";
  document.getElementById("ctFecha").value = ct
    ? ct.fecha
    : new Date().toISOString().split("T")[0];
  document.getElementById("ctHora").value = ct ? ct.hora : "10:00";
  document.getElementById("ctLugar").value = ct ? ct.lugar : "";
  document.getElementById("ctNota").value = ct ? ct.nota : "";
  document.getElementById("citaModal").classList.add("open");
};
window.closeCitaModal = function () {
  document.getElementById("citaModal").classList.remove("open");
};
window.saveCita = function () {
  if (!appData.citas) appData.citas = [];
  var obj = {
    id: _editCitaId || "ct" + Date.now(),
    titulo: document.getElementById("ctTitulo").value || "Sin titulo",
    fecha: document.getElementById("ctFecha").value,
    hora: document.getElementById("ctHora").value,
    lugar: document.getElementById("ctLugar").value,
    nota: document.getElementById("ctNota").value,
  };
  if (_editCitaId) {
    var idx = appData.citas.findIndex(function (x) {
      return x.id === _editCitaId;
    });
    if (idx >= 0) appData.citas[idx] = obj;
    else appData.citas.push(obj);
  } else appData.citas.push(obj);
  closeCitaModal();
  renderAgenda();
  scheduleSave();
};
document.getElementById("citaModal").addEventListener("click", function (e) {
  if (e.target === e.currentTarget) closeCitaModal();
});

// ── PAGOS ──
function renderPagos() {
  var c = document.getElementById("pagosContainer");
  var pagos = (appData.pagos || []).slice().sort(function (a, b) {
    return new Date(b.fecha) - new Date(a.fecha);
  });
  var total = pagos.reduce(function (s, p) {
    return s + (parseFloat(p.monto) || 0);
  }, 0);
  var html =
    "<div class='pagos-total'><div><div style='font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:4px'>Total pagado</div><div style='font-family:Cormorant Garamond,serif;font-size:28px;font-weight:300;color:var(--gold-light)'>" +
    fmt(total) +
    "</div></div><div style='font-size:10px;color:var(--muted);letter-spacing:1px'>" +
    pagos.length +
    " pago" +
    (pagos.length !== 1 ? "s" : "") +
    "</div></div>";
  if (!pagos.length) {
    html +=
      "<div style='text-align:center;padding:30px;color:var(--muted);font-size:13px'>Sin pagos registrados aun.</div>";
  } else {
    html += pagos
      .map(function (p) {
        return (
          "<div class='pago-card'>" +
          "<div><div class='pago-concepto'>" +
          p.concepto +
          "</div><div class='pago-detalle'>" +
          p.metodo +
          (p.nota ? " · " + p.nota : "") +
          "</div>" +
          (p.link
            ? "<a href='" +
              p.link +
              "' target='_blank' class='venue-link'>Ver comprobante</a>"
            : "") +
          "</div>" +
          "<div class='pago-fecha'>" +
          (p.fecha || "—") +
          "</div>" +
          "<div class='pago-monto'>" +
          fmt(p.monto) +
          "</div>" +
          "<button class='check-edit-btn' data-id='" +
          p.id +
          "' onclick='openPagoModal(this.dataset.id)'>✏️</button>" +
          "</div>"
        );
      })
      .join("");
  }
  c.innerHTML = html;
}
var _editPagoId = null;
window.openPagoModal = function (id) {
  _editPagoId = id || null;
  var p = id
    ? (appData.pagos || []).find(function (x) {
        return x.id === id;
      })
    : null;
  document.getElementById("pagoModalTitle").textContent = p
    ? "Editar Pago"
    : "Registrar Pago";
  document.getElementById("pagoModalBtn").textContent = p
    ? "Guardar"
    : "Registrar";
  document.getElementById("pagoDelBtn").style.display = p ? "block" : "none";
  document.getElementById("pgConcepto").value = p ? p.concepto : "";
  document.getElementById("pgMonto").value = p ? p.monto : "";
  document.getElementById("pgFecha").value = p
    ? p.fecha
    : new Date().toISOString().split("T")[0];
  document.getElementById("pgMetodo").value = p ? p.metodo : "Transferencia";
  document.getElementById("pgLink").value = p ? p.link : "";
  document.getElementById("pgNota").value = p ? p.nota : "";
  document.getElementById("pagoModal").classList.add("open");
};
window.closePagoModal = function () {
  document.getElementById("pagoModal").classList.remove("open");
};
window.savePago = function () {
  if (!appData.pagos) appData.pagos = [];
  var obj = {
    id: _editPagoId || "pg" + Date.now(),
    concepto: document.getElementById("pgConcepto").value || "Sin concepto",
    monto: parseFloat(document.getElementById("pgMonto").value) || 0,
    fecha: document.getElementById("pgFecha").value,
    metodo: document.getElementById("pgMetodo").value,
    link: document.getElementById("pgLink").value,
    nota: document.getElementById("pgNota").value,
  };
  if (_editPagoId) {
    var idx = appData.pagos.findIndex(function (x) {
      return x.id === _editPagoId;
    });
    if (idx >= 0) appData.pagos[idx] = obj;
    else appData.pagos.push(obj);
  } else appData.pagos.push(obj);
  closePagoModal();
  renderPagos();
  scheduleSave();
};
document.getElementById("pagoModal").addEventListener("click", function (e) {
  if (e.target === e.currentTarget) closePagoModal();
});
window.exportPagosPDF = function () {
  var pagos = (appData.pagos || []).slice().sort(function (a, b) {
    return new Date(a.fecha) - new Date(b.fecha);
  });
  var total = pagos.reduce(function (s, p) {
    return s + (parseFloat(p.monto) || 0);
  }, 0);
  var html =
    "<html><head><meta charset='UTF-8'><title>Pagos Boda Andy y Rob</title><style>body{font-family:Georgia,serif;padding:40px;color:#1A1612}h1{font-size:28px;font-weight:300}table{width:100%;border-collapse:collapse}th{background:#1A1612;color:#F5F0E8;padding:10px 14px;text-align:left;font-size:11px;text-transform:uppercase;font-weight:400}td{padding:10px 14px;border-bottom:1px solid #DDD5C8;font-size:13px}.total{background:#F5F0E8;padding:16px;display:flex;justify-content:space-between;margin-top:16px;font-size:16px}.tv{font-size:24px;color:#C9A84C}footer{margin-top:40px;font-size:11px;color:#8B7D6B;text-align:center}</style></head><body><h1>Andy y Rob - Registro de Pagos</h1><table><thead><tr><th>Concepto</th><th>Fecha</th><th>Metodo</th><th>Monto</th></tr></thead><tbody>" +
    pagos
      .map(function (p) {
        return (
          "<tr><td>" +
          p.concepto +
          "</td><td>" +
          (p.fecha || "—") +
          "</td><td>" +
          p.metodo +
          "</td><td>$" +
          Number(p.monto).toLocaleString("es-MX") +
          "</td></tr>"
        );
      })
      .join("") +
    "</tbody></table><div class='total'><span>Total pagado</span><span class='tv'>$" +
    Number(total).toLocaleString("es-MX") +
    "</span></div><footer>Generado el " +
    new Date().toLocaleDateString("es-MX") +
    " - Hecho con amor por Rob Hernandez</footer></body></html>";
  var w = window.open("", "_blank");
  w.document.write(html);
  w.document.close();
  setTimeout(function () {
    w.print();
  }, 500);
};

// ── PINTEREST ──
function renderPinterest() {
  var c = document.getElementById("pinterestContainer");
  var pt = appData.pinterest || {};
  if (pt.url) {
    c.innerHTML =
      "<div class='pinterest-wrap'>" +
      "<div class='pinterest-title'>Tablero de Inspiracion</div>" +
      "<div class='pinterest-sub'>Ideas para la boda de Andy y Rob</div>" +
      "<div style='font-size:14px;color:var(--gold);margin-bottom:16px'>" + (pt.nombre || "Nuestro tablero") + "</div>" +
      "<a href='" + pt.url + "' target='_blank' class='pinterest-btn'>Abrir en Pinterest</a>" +
      "<div style='margin-top:20px;background:var(--warm-white);border:1px solid var(--border);border-radius:2px;padding:12px 14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap'>" +
      "<span style='font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);flex-shrink:0'>Liga:</span>" +
      "<span style='font-size:11px;color:var(--dark);word-break:break-all;flex:1'>" + pt.url + "</span>" +
      "<button onclick='copyPinterestUrl()' style='background:var(--dark);color:var(--cream);border:none;padding:6px 14px;font-family:DM Mono,monospace;font-size:10px;letter-spacing:1px;cursor:pointer;border-radius:2px;flex-shrink:0' id='ptCopyBtn'>Copiar</button>" +
      "</div>" +
      "<div style='margin-top:12px'><button class='add-item-btn' onclick='openPinterestModal()'>Cambiar liga</button></div>" +
      "</div>";
  } else {
    c.innerHTML =
      "<div class='pinterest-wrap'>" +
      "<div class='pinterest-title'>Tablero de Inspiracion</div>" +
      "<div class='pinterest-sub'>Ideas para la boda de Andy y Rob</div>" +
      "<div style='color:var(--muted);font-size:13px;margin-bottom:20px'>Aun no han guardado su tablero de Pinterest.</div>" +
      "<button class='pinterest-btn' onclick='openPinterestModal()'>+ Agregar liga</button>" +
      "</div>";
  }
}


window.openPinterestModal = function () {
  var pt = appData.pinterest || {};
  document.getElementById("ptUrl").value = pt.url || "";
  document.getElementById("ptNombre").value = pt.nombre || "";
  document.getElementById("pinterestModal").classList.add("open");
};
window.closePinterestModal = function () {
  document.getElementById("pinterestModal").classList.remove("open");
};
window.savePinterest = function () {
  appData.pinterest = {
    url: document.getElementById("ptUrl").value,
    nombre: document.getElementById("ptNombre").value || "Nuestro tablero",
  };
  closePinterestModal();
  renderPinterest();
  scheduleSave();
};
document
  .getElementById("pinterestModal")
  .addEventListener("click", function (e) {
    if (e.target === e.currentTarget) closePinterestModal();
  });

function renderAll() {
  rendering = true;
  renderCategories();
  renderChecklist();
  renderVendors();
  renderTimeline();
  renderInvitados();
  renderPadrinos();
  renderVenues();
  renderAgenda();
  renderPagos();
  renderPinterest();
  updateSummary();
  rendering = false;
}

function renderCategories() {
  var c = document.getElementById("categoriesContainer");
  c.innerHTML = "";
  (appData.categories || []).forEach(function (cat) {
    var estT = (cat.items || []).reduce(function (s, i) {
      return s + (parseFloat(i.estimated) || 0);
    }, 0);
    var realT = (cat.items || []).reduce(function (s, i) {
      return s + (parseFloat(i.real) || 0);
    }, 0);

    var catDiv = document.createElement("div");
    catDiv.className = "category";

    // Header - use DOM to avoid quote hell
    var titleDiv = document.createElement("div");
    titleDiv.className = "cat-title";

    var titleLeft = document.createElement("div");
    titleLeft.className = "cat-title-left";
    titleLeft.style.cssText = "flex:1;cursor:pointer";
    titleLeft.dataset.catid = cat.id;
    titleLeft.addEventListener("click", function () {
      toggleCat(this.dataset.catid);
    });
    titleLeft.innerHTML =
      "<span>" + cat.icon + "</span><span>" + cat.name + "</span>";

    var titleRight = document.createElement("div");
    titleRight.style.cssText = "display:flex;align-items:center;gap:8px";

    var totalsDiv = document.createElement("div");
    totalsDiv.className = "cat-totals";
    totalsDiv.innerHTML =
      "<span class='est'>Est: " +
      fmt(estT) +
      "</span><span class='real'>Real: " +
      fmt(realT) +
      "</span>";

    var editCatBtn = document.createElement("button");
    editCatBtn.className = "cat-edit-btn";
    editCatBtn.title = "Editar";
    editCatBtn.textContent = "✏️";
    editCatBtn.dataset.catid = cat.id;
    editCatBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      openEditCatModal(this.dataset.catid);
    });

    var toggleSpan = document.createElement("span");
    toggleSpan.className = "cat-toggle";
    toggleSpan.id = "toggle-" + cat.id;
    toggleSpan.textContent = "▾";
    toggleSpan.dataset.catid = cat.id;
    toggleSpan.addEventListener("click", function () {
      toggleCat(this.dataset.catid);
    });

    titleRight.appendChild(totalsDiv);
    titleRight.appendChild(editCatBtn);
    titleRight.appendChild(toggleSpan);
    titleDiv.appendChild(titleLeft);
    titleDiv.appendChild(titleRight);
    catDiv.appendChild(titleDiv);

    // Items container
    var itemsDiv = document.createElement("div");
    itemsDiv.className = "cat-items";
    itemsDiv.id = "catItems-" + cat.id;

    (cat.items || []).forEach(function (item) {
      itemsDiv.appendChild(itemRowHTML(cat.id, item));
    });

    var addRow = document.createElement("div");
    addRow.className = "add-item-row";
    var addBtn = document.createElement("button");
    addBtn.className = "add-item-btn";
    addBtn.textContent = "+ Agregar concepto";
    addBtn.dataset.catid = cat.id;
    addBtn.addEventListener("click", function () {
      openItemModal(this.dataset.catid);
    });
    addRow.appendChild(addBtn);
    itemsDiv.appendChild(addRow);

    catDiv.appendChild(itemsDiv);
    c.appendChild(catDiv);
  });
}

function itemRowHTML(catId, item) {
  var diff = (parseFloat(item.real) || 0) - (parseFloat(item.estimated) || 0);
  var dc = diff > 0 ? "diff-pos" : diff < 0 ? "diff-neg" : "diff-zero";
  var ds = diff !== 0 ? fmt(Math.abs(diff)) + (diff > 0 ? " ↑" : " ↓") : "—";
  var sl = {
    pending: "Pendiente",
    progress: "En proceso",
    confirmed: "Confirmado",
    paid: "Pagado",
  };

  var row = document.createElement("div");
  row.className = "budget-row";

  // Name + note cell
  var nameCell = document.createElement("div");
  var nameDiv = document.createElement("div");
  nameDiv.className = "item-name";
  nameDiv.textContent = item.name;
  nameCell.appendChild(nameDiv);
  if (item.note) {
    var noteDiv = document.createElement("div");
    noteDiv.className = "item-note";
    noteDiv.textContent = item.note;
    nameCell.appendChild(noteDiv);
  }
  row.appendChild(nameCell);

  // Estimated input
  var estInput = document.createElement("input");
  estInput.className = "budget-input";
  estInput.type = "number";
  estInput.placeholder = "0";
  estInput.value = item.estimated || "";
  estInput.addEventListener("change", function () {
    updateItem(catId, item.id, "estimated", this.value);
  });
  row.appendChild(estInput);

  // Real input
  var realInput = document.createElement("input");
  realInput.className = "budget-input";
  realInput.type = "number";
  realInput.placeholder = "0";
  realInput.value = item.real || "";
  realInput.addEventListener("change", function () {
    updateItem(catId, item.id, "real", this.value);
  });
  row.appendChild(realInput);

  // Diff cell
  var diffCell = document.createElement("div");
  diffCell.className = "diff-cell " + dc;
  diffCell.textContent = ds;
  row.appendChild(diffCell);

  // Status cell
  var statusCell = document.createElement("div");
  statusCell.className = "status-cell";
  var statusBtn = document.createElement("button");
  statusBtn.className = "status-badge status-" + item.status;
  statusBtn.textContent = sl[item.status];
  statusBtn.addEventListener("click", function () {
    cycleStatus(catId, item.id);
  });
  statusCell.appendChild(statusBtn);
  row.appendChild(statusCell);

  // Actions cell
  var actionsCell = document.createElement("div");
  actionsCell.className = "item-actions";
  var editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.title = "Editar";
  editBtn.textContent = "✏️";
  editBtn.addEventListener("click", function () {
    openEditItemModal(catId, item.id);
  });
  var delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.title = "Eliminar";
  delBtn.textContent = "✕";
  delBtn.addEventListener("click", function () {
    deleteItem(catId, item.id);
  });
  actionsCell.appendChild(editBtn);
  actionsCell.appendChild(delBtn);
  row.appendChild(actionsCell);

  return row;
}

function updateSummary() {
  let est = 0,
    real = 0;
  for (const cat of appData.categories || [])
    for (const i of cat.items || []) {
      est += parseFloat(i.estimated) || 0;
      real += parseFloat(i.real) || 0;
    }
  const diff = real - est;
  document.getElementById("totalBudget").textContent = fmt(est);
  document.getElementById("totalSpent").textContent = fmt(real);
  const de = document.getElementById("totalDiff");
  de.textContent = (diff > 0 ? "+" : "") + fmt(diff);
  de.className = "value " + (diff > 0 ? "danger" : diff < 0 ? "sage" : "");
  const pct = est > 0 ? Math.min(100, (real / est) * 100) : 0;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressPct").textContent = Math.round(pct) + "%";
  let tot = 0,
    done = 0;
  for (const g of appData.checklist || []) {
    tot += g.items.length;
    done += g.items.filter((i) => i.done).length;
  }
  document.getElementById("tasksProgress").textContent =
    (tot > 0 ? Math.round((done / tot) * 100) : 0) + "%";
}

// ── Actions ──
window.toggleCat = (id) => {
  document.getElementById("catItems-" + id)?.classList.toggle("open");
  document.getElementById("toggle-" + id)?.classList.toggle("open");
};
window.updateItem = (catId, itemId, field, value) => {
  const cat = appData.categories.find((c) => c.id === catId);
  const item = cat?.items.find((i) => i.id === itemId);
  if (item) {
    item[field] = parseFloat(value) || 0;
    updateSummary();
    scheduleSave();
    // Preserve open accordion state
    var openCats = [];
    document.querySelectorAll(".cat-items.open").forEach(function (el) {
      openCats.push(el.id.replace("catItems-", ""));
    });
    renderCategories();
    openCats.forEach(function (id) {
      var el = document.getElementById("catItems-" + id);
      var tog = document.getElementById("toggle-" + id);
      if (el) el.classList.add("open");
      if (tog) tog.classList.add("open");
    });
  }
};
window.cycleStatus = (catId, itemId) => {
  const ss = ["pending", "progress", "confirmed", "paid"];
  const cat = appData.categories.find((c) => c.id === catId);
  const item = cat?.items.find((i) => i.id === itemId);
  if (item) {
    item.status = ss[(ss.indexOf(item.status) + 1) % ss.length];
    renderCategories();
    scheduleSave();
  }
};
window.deleteItem = (catId, itemId) => {
  const cat = appData.categories.find((c) => c.id === catId);
  if (cat) {
    cat.items = cat.items.filter((i) => i.id !== itemId);
    renderCategories();
    updateSummary();
    scheduleSave();
  }
};
window.addCategory = () => {
  const name = prompt("Nombre de la categoría:");
  if (!name) return;
  appData.categories.push({
    id: "cat" + Date.now(),
    name,
    icon: "📦",
    items: [],
  });
  renderCategories();
  scheduleSave();
};
window.openItemModal = (catId) => {
  currentCatId = catId;
  document.getElementById("iName").value = "";
  document.getElementById("iNote").value = "";
  document.getElementById("iEstimated").value = "";
  document.getElementById("itemModal").classList.add("open");
};
window.closeItemModal = () =>
  document.getElementById("itemModal").classList.remove("open");
window.saveItem = () => {
  const cat = appData.categories.find((c) => c.id === currentCatId);
  if (cat) {
    cat.items.push({
      id: itemNextId++,
      name: document.getElementById("iName").value || "Sin nombre",
      note: document.getElementById("iNote").value,
      estimated: parseFloat(document.getElementById("iEstimated").value) || 0,
      real: 0,
      status: "pending",
    });
  }
  closeItemModal();
  renderCategories();
  updateSummary();
  scheduleSave();
};
window.toggleCheck = (id) => {
  for (const g of appData.checklist) {
    const i = g.items.find((x) => x.id === id);
    if (i) {
      i.done = !i.done;
      break;
    }
  }
  renderChecklist();
  updateSummary();
  scheduleSave();
};
window.openVendorModal = () =>
  document.getElementById("vendorModal").classList.add("open");
window.closeVendorModal = () =>
  document.getElementById("vendorModal").classList.remove("open");
window.saveVendor = () => {
  if (!appData.vendors) appData.vendors = [];
  appData.vendors.push({
    id: Date.now(),
    cat: document.getElementById("vCat").value,
    name: document.getElementById("vName").value || "Sin nombre",
    contact: document.getElementById("vContact").value,
    price: parseFloat(document.getElementById("vPrice").value) || 0,
    status: document.getElementById("vStatus").value,
    notes: document.getElementById("vNotes").value,
  });
  closeVendorModal();
  renderVendors();
  scheduleSave();
};
window.cycleVendorStatus = (id) => {
  const ss = ["pending", "progress", "confirmed", "paid"];
  id = typeof id === "string" ? parseInt(id) || id : id;
  const v = appData.vendors?.find((x) => x.id == id);
  if (v) {
    v.status = ss[(ss.indexOf(v.status) + 1) % ss.length];
    renderVendors();
    scheduleSave();
  }
};
window.switchTab = (name, btn) => {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("panel-" + name).classList.add("active");
  btn.classList.add("active");
};

document.getElementById("vendorModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeVendorModal();
});
document.getElementById("itemModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeItemModal();
});

// ── Edit Item ──
let _editCatId = null,
  _editItemId = null;
window.openEditItemModal = (catId, itemId) => {
  const cat = appData.categories.find((c) => c.id === catId);
  const item = cat?.items.find((i) => i.id === itemId);
  if (!item) return;
  _editCatId = catId;
  _editItemId = itemId;
  document.getElementById("eiName").value = item.name;
  document.getElementById("eiNote").value = item.note || "";
  document.getElementById("eiEstimated").value = item.estimated || "";
  document.getElementById("editItemModal").classList.add("open");
};
window.closeEditItemModal = () =>
  document.getElementById("editItemModal").classList.remove("open");
window.saveEditItem = () => {
  const cat = appData.categories.find((c) => c.id === _editCatId);
  const item = cat?.items.find((i) => i.id === _editItemId);
  if (item) {
    item.name = document.getElementById("eiName").value || item.name;
    item.note = document.getElementById("eiNote").value;
    item.estimated =
      parseFloat(document.getElementById("eiEstimated").value) || 0;
  }
  closeEditItemModal();
  renderCategories();
  updateSummary();
  scheduleSave();
};
document.getElementById("editItemModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditItemModal();
});

// ── Edit Category ──
let _editCatIdCat = null;
window.openEditCatModal = (catId) => {
  const cat = appData.categories.find((c) => c.id === catId);
  if (!cat) return;
  _editCatIdCat = catId;
  document.getElementById("ecName").value = cat.name;
  document.getElementById("ecIcon").value = cat.icon;
  document.getElementById("editCatModal").classList.add("open");
};
window.closeEditCatModal = () =>
  document.getElementById("editCatModal").classList.remove("open");
window.saveEditCat = () => {
  const cat = appData.categories.find((c) => c.id === _editCatIdCat);
  if (cat) {
    cat.name = document.getElementById("ecName").value || cat.name;
    cat.icon = document.getElementById("ecIcon").value || cat.icon;
  }
  closeEditCatModal();
  renderCategories();
  scheduleSave();
};
window.deleteCat = () => {
  if (!confirm("¿Eliminar esta categoría y todos sus conceptos?")) return;
  appData.categories = appData.categories.filter((c) => c.id !== _editCatIdCat);
  closeEditCatModal();
  renderCategories();
  updateSummary();
  scheduleSave();
};
document.getElementById("editCatModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditCatModal();
});

// ── Edit Check Item ──
let _editCheckGi = null,
  _editCheckId = null;
window.openEditCheckModal = (gi, id) => {
  const item = appData.checklist[gi]?.items.find((x) => x.id === id);
  if (!item) return;
  _editCheckGi = gi;
  _editCheckId = id;
  document.getElementById("echText").value = item.text;
  document.getElementById("echNote").value = item.note || "";
  document.getElementById("echPriority").value = item.priority;
  document.getElementById("editCheckModal").classList.add("open");
};
window.closeEditCheckModal = () =>
  document.getElementById("editCheckModal").classList.remove("open");
window.saveEditCheck = () => {
  const item = appData.checklist[_editCheckGi]?.items.find(
    (x) => x.id === _editCheckId,
  );
  if (item) {
    item.text = document.getElementById("echText").value || item.text;
    item.note = document.getElementById("echNote").value;
    item.priority = document.getElementById("echPriority").value;
  }
  closeEditCheckModal();
  renderChecklist();
  scheduleSave();
};
window.deleteCheck = () => {
  appData.checklist[_editCheckGi].items = appData.checklist[
    _editCheckGi
  ].items.filter((x) => x.id !== _editCheckId);
  closeEditCheckModal();
  renderChecklist();
  updateSummary();
  scheduleSave();
};
window.openEditGroupModal = (gi) => {
  const name = prompt("Nombre del grupo:", appData.checklist[gi].group);
  if (name) {
    appData.checklist[gi].group = name;
    renderChecklist();
    scheduleSave();
  }
};
window.addCheckItem = (gi) => {
  const text = prompt("Nombre de la tarea:");
  if (!text) return;
  appData.checklist[gi].items.push({
    id: "c" + Date.now(),
    text,
    note: "",
    done: false,
    priority: "media",
  });
  renderChecklist();
  scheduleSave();
};
document.getElementById("editCheckModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditCheckModal();
});

// ── Edit Timeline ──
let _editTimelineIdx = null;
window.openEditTimelineModal = (i) => {
  const t = appData.timeline[i];
  if (!t) return;
  _editTimelineIdx = i;
  document.getElementById("etDate").value = t.date;
  document.getElementById("etTitle").value = t.title;
  document.getElementById("etTasks").value = t.tasks;
  document.getElementById("tlDelBtn").style.display = "block";
  document.getElementById("editTimelineModal").classList.add("open");
};
window.closeEditTimelineModal = () =>
  document.getElementById("editTimelineModal").classList.remove("open");
window.saveEditTimeline = () => {
  const t = appData.timeline[_editTimelineIdx];
  if (t) {
    t.date = document.getElementById("etDate").value || t.date;
    t.title = document.getElementById("etTitle").value || t.title;
    t.tasks = document.getElementById("etTasks").value || t.tasks;
  }
  closeEditTimelineModal();
  renderTimeline();
  scheduleSave();
};
document.getElementById("editTimelineModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditTimelineModal();
});

// ── Edit Vendor ──
let _editVendorId = null;
window.openEditVendorModal = (id) => {
  id = typeof id === "string" ? parseInt(id) || id : id;
  const v = appData.vendors?.find((x) => x.id == id);
  if (!v) return;
  _editVendorId = id;
  document.getElementById("evCat").value = v.cat;
  document.getElementById("evName").value = v.name;
  document.getElementById("evContact").value = v.contact || "";
  document.getElementById("evPrice").value = v.price || "";
  document.getElementById("evStatus").value = v.status;
  document.getElementById("evNotes").value = v.notes || "";
  document.getElementById("editVendorModal").classList.add("open");
};
window.closeEditVendorModal = () =>
  document.getElementById("editVendorModal").classList.remove("open");
window.saveEditVendor = () => {
  const v = appData.vendors?.find((x) => x.id === _editVendorId);
  if (v) {
    v.cat = document.getElementById("evCat").value;
    v.name = document.getElementById("evName").value || v.name;
    v.contact = document.getElementById("evContact").value;
    v.price = parseFloat(document.getElementById("evPrice").value) || 0;
    v.status = document.getElementById("evStatus").value;
    v.notes = document.getElementById("evNotes").value;
  }
  closeEditVendorModal();
  renderVendors();
  scheduleSave();
};
window.deleteVendor = () => {
  if (!confirm("¿Eliminar este proveedor?")) return;
  appData.vendors = appData.vendors.filter((x) => x.id !== _editVendorId);
  closeEditVendorModal();
  renderVendors();
  scheduleSave();
};
document.getElementById("editVendorModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditVendorModal();
});

window.deleteTimeline = function () {
  if (!confirm("¿Eliminar esta etapa del timeline?")) return;
  appData.timeline.splice(_editTimelineIdx, 1);
  closeEditTimelineModal();
  renderTimeline();
  scheduleSave();
};
window.copyPinterestUrl = function() {
  var url = (appData.pinterest || {}).url || "";
  if (!url) return;
  navigator.clipboard.writeText(url).then(function() {
    var btn = document.querySelector("#pinterestContainer button[onclick*=copy]");
    if (btn) { btn.textContent = "Copiado!"; setTimeout(function(){ btn.textContent = "Copiar"; }, 2000); }
  });
};
window.deleteCita = function () {
  if (!confirm("¿Eliminar esta cita?")) return;
  appData.citas = (appData.citas || []).filter(function (x) {
    return x.id !== _editCitaId;
  });
  closeCitaModal();
  renderAgenda();
  scheduleSave();
};
window.deletePago = function () {
  if (!confirm("¿Eliminar este pago?")) return;
  appData.pagos = (appData.pagos || []).filter(function (x) {
    return x.id !== _editPagoId;
  });
  closePagoModal();
  renderPagos();
  scheduleSave();
};
window.deleteInvitado = function () {
  if (!confirm("¿Eliminar este invitado?")) return;
  appData.invitados = (appData.invitados || []).filter(function (x) {
    return x.id !== _editInvId;
  });
  closeInvitadoModal();
  renderInvitados();
  scheduleSave();
};
window.deleteVenue = function () {
  if (!confirm("¿Eliminar este venue?")) return;
  appData.venues = (appData.venues || []).filter(function (x) {
    return x.id != _editVenueId;
  });
  closeVenueModal();
  renderVenues();
  scheduleSave();
};

loadFromFirebase();

function renderChecklist() {
  var html = "";
  (appData.checklist || []).forEach(function (g, gi) {
    html += "<div class='checklist-group'>";
    html += "<div class='checklist-group-title' style='display:flex;justify-content:space-between;align-items:center'>";
    html += "<span>" + g.group + "</span>";
    html += "<button class='check-edit-btn' data-gi='" + gi + "' onclick='openEditGroupModal(parseInt(this.dataset.gi))' title='Editar grupo'>✏️</button>";
    html += "</div>";
    (g.items || []).forEach(function (item) {
      html += "<div class='check-item " + (item.done ? "done" : "") + "' id='chk-" + item.id + "'>";
      html += "<div class='check-box " + (item.done ? "checked" : "") + "' data-id='" + item.id + "' onclick='toggleCheck(this.dataset.id)'></div>";
      html += "<div class='check-content'>";
      html += "<div class='check-label'>" + item.text + "</div>";
      if (item.note) html += "<div class='check-note'>" + item.note + "</div>";
      html += "</div>";
      html += "<span class='check-priority priority-" + item.priority + "'>" + item.priority + "</span>";
      html += "<button class='check-edit-btn' data-gi='" + gi + "' data-id='" + item.id + "' onclick='openEditCheckModal(parseInt(this.dataset.gi),this.dataset.id)'>✏️</button>";
      html += "</div>";
    });
    html += "<div style='padding:8px 0 2px'><button class='add-item-btn' data-gi='" + gi + "' onclick='addCheckItem(parseInt(this.dataset.gi))'>+ Agregar tarea</button></div>";
    html += "</div>";
  });
  document.getElementById("checklistContainer").innerHTML = html;
}

function renderVendors() {
  var sl = { pending: "Pendiente", progress: "En revision", confirmed: "Confirmado", paid: "Pagado" };
  document.getElementById("vendorsGrid").innerHTML = (appData.vendors || []).map(function (v) {
    return "<div class='vendor-card'>" +
      "<div style='display:flex;justify-content:space-between;align-items:flex-start'>" +
      "<div class='vendor-cat'>" + v.cat + "</div>" +
      "<button class='check-edit-btn' data-id='" + v.id + "' onclick='openEditVendorModal(this.dataset.id)'>✏️</button>" +
      "</div>" +
      "<div class='vendor-name'>" + v.name + "</div>" +
      "<div class='vendor-contact'>" + (v.contact || "—") + "</div>" +
      (v.notes ? "<div style='font-size:11px;color:var(--muted);margin-bottom:8px'>" + v.notes + "</div>" : "") +
      "<div class='vendor-status-row'>" +
      "<div class='vendor-price'>" + fmt(v.price) + "</div>" +
      "<button class='status-badge status-" + v.status + "' data-id='" + v.id + "' onclick='cycleVendorStatus(this.dataset.id)'>" + sl[v.status] + "</button>" +
      "</div></div>";
  }).join("");
}

function renderTimeline() {
  document.getElementById("timelineContainer").innerHTML = (appData.timeline || []).map(function (t, i) {
    return "<div class='timeline-item'>" +
      "<div class='timeline-dot " + t.status + "'></div>" +
      "<div class='timeline-date'>" + t.date + "</div>" +
      "<div class='timeline-title'>" + t.title + "</div>" +
      "<div class='timeline-tasks'>" + t.tasks.split("\n").join("<br>") + "</div>" +
      "<button class='timeline-edit-btn' data-i='" + i + "' onclick='openEditTimelineModal(parseInt(this.dataset.i))'>✏️ editar etapa</button>" +
      "</div>";
  }).join("");
}