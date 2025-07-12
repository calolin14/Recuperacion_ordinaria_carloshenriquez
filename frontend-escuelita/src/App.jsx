import React, { useState, useEffect } from 'react';
import { Users, UserPlus, BarChart3, Home, Edit, Trash2, Save, X, ArrowLeft, Loader2 } from 'lucide-react';

const styles = {
  // Estilos base - Pantalla completa
  app: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#2b2d30',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    position: 'relative'
  },
  
  // Navbar - Ajustado para pantalla completa
  navbar: {
    backgroundColor: '#dc2626',
    color: 'white',
    padding: '1rem 2rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '70px',
    display: 'flex',
    alignItems: 'center'
  },
  navbarContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navbarTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    background: 'none',
    border: 'none',
    color: 'white',
    '&:hover': {
      color: '#fca5a5'
    }
  },
  navbarLinks: {
    display: 'flex',
    gap: '1rem'
  },
  navbarLink: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem',
    background: 'none',
    border: 'none',
    color: 'white',
    borderRadius: '0.5rem',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
  },
  navbarLinkActive: {
    backgroundColor: 'rgba(252, 211, 77, 0.2)',
    color: '#fcd34d'
  },
  
  // Bienvenida - Pantalla completa
  bienvenida: {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #dc2626 0%, #2563eb 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  },
  bienvenidaCard: {
    textAlign: 'center',
    color: 'white',
    padding: '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '2rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    maxWidth: '600px',
    width: '100%'
  },
  bienvenidaTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    animation: 'pulse 2s infinite',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  bienvenidaSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2.5rem',
    opacity: 0.9
  },
  bienvenidaButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center'
  },
  
  // Botones mejorados
  buttonPrimary: {
    backgroundColor: '#eab308',
    color: 'black',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px 0 rgba(234, 179, 8, 0.39)',
    transform: 'translateY(0)',
    '&:hover': {
      backgroundColor: '#f59e0b',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px 0 rgba(234, 179, 8, 0.5)'
    }
  },
  buttonSecondary: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
    transform: 'translateY(0)',
    '&:hover': {
      backgroundColor: '#2563eb',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px 0 rgba(59, 130, 246, 0.5)'
    }
  },
  buttonSuccess: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: '#059669',
      transform: 'translateY(-1px)'
    }
  },
  buttonDanger: {
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '&:hover': {
      backgroundColor: '#dc2626',
      transform: 'translateY(-1px)'
    }
  },
  buttonGray: {
    backgroundColor: '#6b7280',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '&:hover': {
      backgroundColor: '#4b5563',
      transform: 'translateY(-1px)'
    }
  },
  
  // Container - Ajustado para pantalla completa
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 70px)',
    padding: '90px 2rem 2rem',
    backgroundColor: '#2e2f33',
    marginTop: '70px'
  },
  
  // Dashboard mejorado
  dashboardTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#f3f4f6',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
  },
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  statCard: {
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)'
    }
  },
  statCardGreen: {
    background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)'
  },
  statCardRed: {
    background: 'linear-gradient(135deg, #991b1b 0%, #ef4444 100%)'
  },
  statCardBlue: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    color: 'white'
  },
  statLabel: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500'
  },
  
  // Chart mejorado
  chartContainer: {
    marginTop: '2rem',
    backgroundColor: '#374151',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  chartTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#f3f4f6'
  },
  chartBars: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '3rem',
    height: '250px',
    paddingTop: '2rem'
  },
  chartBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  chartBarGreen: {
    backgroundColor: '#10b981',
    width: '5rem',
    borderRadius: '0.5rem 0.5rem 0 0',
    transition: 'all 1s ease',
    boxShadow: '0 4px 10px rgba(16, 185, 129, 0.5)'
  },
  chartBarRed: {
    backgroundColor: '#ef4444',
    width: '5rem',
    borderRadius: '0.5rem 0.5rem 0 0',
    transition: 'all 1s ease',
    boxShadow: '0 4px 10px rgba(239, 68, 68, 0.5)'
  },
  chartBarLabel: {
    fontSize: '1rem',
    marginTop: '0.5rem',
    fontWeight: '500',
    color: '#f3f4f6'
  },
  
  // Formulario mejorado
  formContainer: {
    backgroundColor: '#374151',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    marginBottom: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#f3f4f6'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  formLabel: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#f3f4f6',
    marginBottom: '0.5rem'
  },
  formInput: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '2px solid #4b5563',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#1f2937',
    color: 'white',
    '&:focus': {
      outline: 'none',
      borderColor: '#dc2626',
      boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.3)',
      backgroundColor: '#111827'
    }
  },
  formError: {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    fontWeight: '500'
  },
  formButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem'
  },
  
  // Tabla mejorada
  tableContainer: {
    backgroundColor: '#374151',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    color: 'white'
  },
  tableHeaderCell: {
    padding: '1rem 1.5rem',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '1rem'
  },
  tableRow: {
    borderBottom: '1px solid #4b5563',
    transition: 'all 0.3s ease',
    '&:nth-child(even)': {
      backgroundColor: '#1f2937'
    },
    '&:hover': {
      backgroundColor: '#1e293b',
      transform: 'scale(1.01)'
    }
  },
  tableCell: {
    padding: '1rem 1.5rem',
    fontSize: '0.95rem',
    color: '#f3f4f6'
  },
  
  // Badge mejorado
  badge: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.025em'
  },
  badgeActive: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    color: '#86efac',
    border: '1px solid #22c55e'
  },
  badgeInactive: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    color: '#fca5a5',
    border: '1px solid #ef4444'
  },
  
  // Loading mejorado
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',
    gap: '1rem',
    height: '50vh'
  },
  loadingText: {
    color: '#9ca3af',
    fontSize: '1.125rem'
  },
  
  // Error mejorado
  error: {
    backgroundColor: '#450a0a',
    border: '2px solid #fca5a5',
    color: '#fca5a5',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    margin: '2rem',
    textAlign: 'center'
  },
  errorTitle: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.125rem'
  },
  
  // Actions mejoradas
  actions: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center'
  },
  actionButton: {
    padding: '0.5rem',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'scale(1.1)'
    }
  },
  actionButtonEdit: {
    color: '#93c5fd',
    '&:hover': {
      backgroundColor: 'rgba(37, 99, 235, 0.2)'
    }
  },
  actionButtonDelete: {
    color: '#fca5a5',
    '&:hover': {
      backgroundColor: 'rgba(220, 38, 38, 0.2)'
    }
  },
  
  // Header mejorado
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem 0'
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#f3f4f6',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
  },
  
  // Responsive mejorado
  '@media (max-width: 768px)': {
    bienvenidaTitle: {
      fontSize: '2.5rem'
    },
    bienvenidaSubtitle: {
      fontSize: '1.25rem'
    },
    bienvenidaButtons: {
      flexDirection: 'column'
    },
    navbar: {
      padding: '1rem',
      height: 'auto',
      minHeight: '70px'
    },
    navbarContainer: {
      flexDirection: 'column',
      gap: '1rem'
    },
    container: {
      padding: '110px 1rem 1rem 1rem'
    },
    dashboardGrid: {
      gridTemplateColumns: '1fr',
      gap: '1rem'
    },
    formButtons: {
      flexDirection: 'column'
    },
    pageHeader: {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'stretch'
    },
    chartBars: {
      gap: '1rem'
    },
    chartBarGreen: {
      width: '3rem'
    },
    chartBarRed: {
      width: '3rem'
    }
  }
};

// Añadir keyframes para la animación pulse
const keyframes = {
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(1.05)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  }
};

// Exportar estilos y keyframes
export { styles, keyframes };
// Configuración de la API
const API_BASE_URL = 'http://localhost:5000/api';

// Servicio para manejo de API
class ApiService {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  static async getStudents() {
    return this.request('/students');
  }

  static async getStudent(id) {
    return this.request(`/students/${id}`);
  }

  static async createStudent(student) {
    return this.request('/students', {
      method: 'POST',
      body: JSON.stringify(student),
    });
  }

  static async updateStudent(id, student) {
    return this.request(`/students/${id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
    });
  }

  static async deleteStudent(id) {
    return this.request(`/students/${id}`, {
      method: 'DELETE',
    });
  }

  static async getStudentsStats() {
    return this.request('/students/stats');
  }
}

// Custom Hook para gestionar estudiantes con API
const useEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar estudiantes al montar el componente
  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getStudents();
      setEstudiantes(data.data || data);
    } catch (err) {
      setError('Error al cargar estudiantes');
      console.error('Error cargando estudiantes:', err);
    } finally {
      setLoading(false);
    }
  };

  const crearEstudiante = async (estudiante) => {
    try {
      setError(null);
      const nuevoEstudiante = await ApiService.createStudent(estudiante);
      setEstudiantes(prev => [...prev, nuevoEstudiante.data || nuevoEstudiante]);
      return true;
    } catch (err) {
      setError('Error al crear estudiante');
      console.error('Error creando estudiante:', err);
      return false;
    }
  };

  const actualizarEstudiante = async (id, datosActualizados) => {
    try {
      setError(null);
      const estudianteActualizado = await ApiService.updateStudent(id, datosActualizados);
      setEstudiantes(prev => 
        prev.map(est => 
          est._id === id ? (estudianteActualizado.data || estudianteActualizado) : est
        )
      );
      return true;
    } catch (err) {
      setError('Error al actualizar estudiante');
      console.error('Error actualizando estudiante:', err);
      return false;
    }
  };

  const eliminarEstudiante = async (id) => {
    try {
      setError(null);
      await ApiService.deleteStudent(id);
      setEstudiantes(prev => prev.filter(est => est._id !== id));
      return true;
    } catch (err) {
      setError('Error al eliminar estudiante');
      console.error('Error eliminando estudiante:', err);
      return false;
    }
  };

  const obtenerEstadisticas = () => {
    const activos = estudiantes.filter(est => est.estado === 'Activo').length;
    const inactivos = estudiantes.filter(est => est.estado === 'Inactivo').length;
    return { activos, inactivos, total: estudiantes.length };
  };

  return {
    estudiantes,
    loading,
    error,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante,
    obtenerEstadisticas,
    cargarEstudiantes
  };
};

// Custom Hook para formularios
const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    
    Object.keys(values).forEach(key => {
      if (!values[key] || values[key].trim() === '') {
        newErrors[key] = 'Este campo es requerido';
      }
    });

    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      try {
        const success = await onSubmit(values);
        if (success) {
          setValues(initialValues);
        }
      } catch (error) {
        console.error('Error en submit:', error);
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitting(false);
  };

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
    resetForm
  };
};

// Componente de Navegación
const Navbar = ({ onNavigate, currentPage }) => {
  const [hoveredTitle, setHoveredTitle] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <button 
          onClick={() => onNavigate('home')}
          style={{
            ...styles.navbarTitle,
            ...(hoveredTitle ? styles.navbarTitleHover : {})
          }}
          onMouseEnter={() => setHoveredTitle(true)}
          onMouseLeave={() => setHoveredTitle(false)}
        >
          <Home style={{ marginRight: '0.5rem' }} />
          Escuelita Marvel
        </button>
        <div style={styles.navbarLinks}>
          <button 
            onClick={() => onNavigate('dashboard')}
            style={{
              ...styles.navbarLink,
              ...(currentPage === 'dashboard' ? styles.navbarLinkActive : {})
            }}
          >
            <BarChart3 style={{ marginRight: '0.25rem' }} />
            Dashboard
          </button>
          <button 
            onClick={() => onNavigate('estudiantes')}
            style={{
              ...styles.navbarLink,
              ...(currentPage === 'estudiantes' ? styles.navbarLinkActive : {})
            }}
          >
            <Users style={{ marginRight: '0.25rem' }} />
            Estudiantes
          </button>
        </div>
      </div>
    </nav>
  );
};

// Componente de Loading
const LoadingSpinner = () => (
  <div style={styles.loading}>
    <Loader2 style={{ width: '2rem', height: '2rem', animation: 'spin 1s linear infinite', color: '#dc2626' }} />
    <span style={styles.loadingText}>Cargando...</span>
  </div>
);

// Componente de Error
const ErrorMessage = ({ message, onRetry }) => (
  <div style={styles.error}>
    <p style={styles.errorTitle}>Error:</p>
    <p>{message}</p>
    {onRetry && (
      <button 
        onClick={onRetry}
        style={{
          ...styles.buttonDanger,
          marginTop: '0.5rem'
        }}
      >
        Reintentar
      </button>
    )}
  </div>
);

// Componente de Bienvenida
const Bienvenida = ({ onNavigate }) => {
  return (
    <div style={styles.bienvenida}>
      <div style={styles.bienvenidaCard}>
        <h1 style={styles.bienvenidaTitle}>
          ¡Bienvenido a Escuelita Marvel!
        </h1>
        <p style={styles.bienvenidaSubtitle}>
          Sistema de Gestión Estudiantil para futuros superhéroes
        </p>
        <div style={styles.bienvenidaButtons}>
          <button
            onClick={() => onNavigate('dashboard')}
            style={styles.buttonPrimary}
          >
            Ver Dashboard
          </button>
          <button
            onClick={() => onNavigate('estudiantes')}
            style={styles.buttonSecondary}
          >
            Gestionar Estudiantes
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Dashboard
const Dashboard = ({ estadisticas }) => {
  const [hoveredCards, setHoveredCards] = useState({});

  const handleCardHover = (cardType, isHovered) => {
    setHoveredCards(prev => ({
      ...prev,
      [cardType]: isHovered
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.dashboardTitle}>
        Dashboard - Estadísticas Estudiantiles
      </h2>
      
      <div style={styles.dashboardGrid}>
        <div 
          style={{
            ...styles.statCard,
            ...styles.statCardGreen,
            ...(hoveredCards.activos ? styles.statCardHover : {})
          }}
          onMouseEnter={() => handleCardHover('activos', true)}
          onMouseLeave={() => handleCardHover('activos', false)}
        >
          <div style={{...styles.statNumber, ...styles.statNumberGreen}}>
            {estadisticas.activos}
          </div>
          <div style={styles.statLabel}>Estudiantes Activos</div>
        </div>
        
        <div 
          style={{
            ...styles.statCard,
            ...styles.statCardRed,
            ...(hoveredCards.inactivos ? styles.statCardHover : {})
          }}
          onMouseEnter={() => handleCardHover('inactivos', true)}
          onMouseLeave={() => handleCardHover('inactivos', false)}
        >
          <div style={{...styles.statNumber, ...styles.statNumberRed}}>
            {estadisticas.inactivos}
          </div>
          <div style={styles.statLabel}>Estudiantes Inactivos</div>
        </div>
        
        <div 
          style={{
            ...styles.statCard,
            ...styles.statCardBlue,
            ...(hoveredCards.total ? styles.statCardHover : {})
          }}
          onMouseEnter={() => handleCardHover('total', true)}
          onMouseLeave={() => handleCardHover('total', false)}
        >
          <div style={{...styles.statNumber, ...styles.statNumberBlue}}>
            {estadisticas.total}
          </div>
          <div style={styles.statLabel}>Total Estudiantes</div>
        </div>
      </div>

      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Gráfico de Distribución</h3>
        <div style={styles.chartBars}>
          <div style={styles.chartBar}>
            <div 
              style={{
                ...styles.chartBarGreen,
                height: `${Math.max((estadisticas.activos / Math.max(estadisticas.total, 1)) * 180, 20)}px`
              }}
            ></div>
            <span style={styles.chartBarLabel}>Activos ({estadisticas.activos})</span>
          </div>
          <div style={styles.chartBar}>
            <div 
              style={{
                ...styles.chartBarRed,
                height: `${Math.max((estadisticas.inactivos / Math.max(estadisticas.total, 1)) * 180, 20)}px`
              }}
            ></div>
            <span style={styles.chartBarLabel}>Inactivos ({estadisticas.inactivos})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Formulario de Estudiante
const FormularioEstudiante = ({ estudiante, onSubmit, onCancel }) => {
  const initialValues = estudiante || {
    nombre: '',
    apellido: '',
    grado: '',
    estado: 'Activo'
  };

  const { values, errors, submitting, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  const grados = [
    '1° Básico', '2° Grado', '3° Grado', '4° Grado', '5° Grado',
    '6° Grado', '7° Grado', '8° Grado', '9° Grado'
  ];

  return (
    <div style={styles.formContainer}>
      <h3 style={styles.formTitle}>
        {estudiante ? 'Editar Estudiante' : 'Nuevo Estudiante'}
      </h3>
      
      <div>
        <div style={styles.formGroup}>
          <label style={styles.formLabel}>
            Nombre
          </label>
          <input
            type="text"
            value={values.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)}
            style={styles.formInput}
            placeholder="Ingresa el nombre"
            disabled={submitting}
          />
          {errors.nombre && <div style={styles.formError}>{errors.nombre}</div>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.formLabel}>
            Apellido
          </label>
          <input
            type="text"
            value={values.apellido}
            onChange={(e) => handleChange('apellido', e.target.value)}
            style={styles.formInput}
            placeholder="Ingresa el apellido"
            disabled={submitting}
          />
          {errors.apellido && <div style={styles.formError}>{errors.apellido}</div>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.formLabel}>
            Grado
          </label>
          <select
            value={values.grado}
            onChange={(e) => handleChange('grado', e.target.value)}
            style={styles.formInput}
            disabled={submitting}
          >
            <option value="">Selecciona un grado</option>
            {grados.map(grado => (
              <option key={grado} value={grado}>{grado}</option>
            ))}
          </select>
          {errors.grado && <div style={styles.formError}>{errors.grado}</div>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.formLabel}>
            Estado
          </label>
          <select
            value={values.estado}
            onChange={(e) => handleChange('estado', e.target.value)}
            style={styles.formInput}
            disabled={submitting}
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <div style={styles.formButtons}>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            style={{
              ...styles.buttonSecondary,
              ...(submitting ? { backgroundColor: '#93c5fd' } : {})
            }}
          >
            {submitting ? (
              <>
                <Loader2 style={{ marginRight: '0.5rem', width: '1rem', height: '1rem', animation: 'spin 1s linear infinite' }} />
                Guardando...
              </>
            ) : (
              <>
                <Save style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} />
                {estudiante ? 'Actualizar' : 'Crear'}
              </>
            )}
          </button>
          <button
            onClick={onCancel}
            disabled={submitting}
            style={{
              ...styles.buttonGray,
              ...(submitting ? { backgroundColor: '#9ca3af' } : {})
            }}
          >
            <X style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} />
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente de Gestión de Estudiantes
const GestionEstudiantes = ({ estudiantes, loading, error, onCrear, onActualizar, onEliminar, onRecargar }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [estudianteEditando, setEstudianteEditando] = useState(null);
  const [hoveredRows, setHoveredRows] = useState({});

  const handleSubmitFormulario = async (datos) => {
    let success = false;
    
    if (estudianteEditando) {
      success = await onActualizar(estudianteEditando._id, datos);
    } else {
      success = await onCrear(datos);
    }
    
    if (success) {
      setMostrarFormulario(false);
      setEstudianteEditando(null);
    }
    
    return success;
  };

  const handleEditar = (estudiante) => {
    setEstudianteEditando(estudiante);
    setMostrarFormulario(true);
  };

  const handleCancelar = () => {
    setMostrarFormulario(false);
    setEstudianteEditando(null);
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
      await onEliminar(id);
    }
  };

  const handleRowHover = (id, isHovered) => {
    setHoveredRows(prev => ({
      ...prev,
      [id]: isHovered
    }));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={onRecargar} />;

  return (
    <div style={styles.container}>
      <div style={styles.pageHeader}>
        <h2 style={styles.pageTitle}>Gestión de Estudiantes</h2>
        <button
          onClick={() => setMostrarFormulario(true)}
          style={styles.buttonSuccess}
        >
          <UserPlus style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} />
          Nuevo Estudiante
        </button>
      </div>

      {mostrarFormulario && (
        <FormularioEstudiante
          estudiante={estudianteEditando}
          onSubmit={handleSubmitFormulario}
          onCancel={handleCancelar}
        />
      )}

      <div style={styles.tableContainer}>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Carnet</th>
                <th style={styles.tableHeaderCell}>Nombre</th>
                <th style={styles.tableHeaderCell}>Apellido</th>
                <th style={styles.tableHeaderCell}>Grado</th>
                <th style={styles.tableHeaderCell}>Estado</th>
                <th style={styles.tableHeaderCell}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante, index) => (
                <tr 
                  key={estudiante._id} 
                  style={{
                    ...styles.tableRow,
                    ...(index % 2 === 0 ? styles.tableRowEven : {}),
                    ...(hoveredRows[estudiante._id] ? styles.tableRowHover : {})
                  }}
                  onMouseEnter={() => handleRowHover(estudiante._id, true)}
                  onMouseLeave={() => handleRowHover(estudiante._id, false)}
                >
                  <td style={{...styles.tableCell, fontWeight: '500'}}>{estudiante.carnet}</td>
                  <td style={styles.tableCell}>{estudiante.nombre}</td>
                  <td style={styles.tableCell}>{estudiante.apellido}</td>
                  <td style={styles.tableCell}>{estudiante.grado}</td>
                  <td style={styles.tableCell}>
                    <span style={{
                      ...styles.badge,
                      ...(estudiante.estado === 'Activo' ? styles.badgeActive : styles.badgeInactive)
                    }}>
                      {estudiante.estado}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.actions}>
                      <button
                        onClick={() => handleEditar(estudiante)}
                        style={{...styles.actionButton, ...styles.actionButtonEdit}}
                        title="Editar"
                      >
                        <Edit style={{ width: '1rem', height: '1rem' }} />
                      </button>
                      <button
                        onClick={() => handleEliminar(estudiante._id)}
                        style={{...styles.actionButton, ...styles.actionButtonDelete}}
                        title="Eliminar"
                      >
                        <Trash2 style={{ width: '1rem', height: '1rem' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Componente Principal de la Aplicación
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const {
    estudiantes,
    loading,
    error,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante,
    obtenerEstadisticas,
    cargarEstudiantes
  } = useEstudiantes();

  const estadisticas = obtenerEstadisticas();

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Bienvenida onNavigate={handleNavigate} />;
      case 'dashboard':
        return (
          <>
            <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <ErrorMessage message={error} onRetry={cargarEstudiantes} />
            ) : (
              <Dashboard estadisticas={estadisticas} />
            )}
          </>
        );
      case 'estudiantes':
        return (
          <>
            <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
            <GestionEstudiantes
              estudiantes={estudiantes}
              loading={loading}
              error={error}
              onCrear={crearEstudiante}
              onActualizar={actualizarEstudiante}
              onEliminar={eliminarEstudiante}
              onRecargar={cargarEstudiantes}
            />
          </>
        );
      default:
        return <Bienvenida onNavigate={handleNavigate} />;
    }
  };

  // Agregar CSS para animaciones
  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.app}>
        {renderCurrentPage()}
      </div>
    </>
  );
};

export default App;