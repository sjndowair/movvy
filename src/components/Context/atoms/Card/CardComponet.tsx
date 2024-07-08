}

const CardComponent: React.FC<CardComponentProps> = ({ title }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const calculateCardsPerSlide = () => {
    if (window.innerWidth >= 768) {
      return 5;
    } else if (window.innerWidth >= 480) {
      return 3;
    } else {
      return 1;
    }
  };
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(
    calculateCardsPerSlide()
  );

  useEffect(() => {
    function handleResize() {
      setCardsPerSlide(calculateCardsPerSlide());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

