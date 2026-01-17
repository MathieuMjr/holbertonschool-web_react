// le compiler TS se fiche des noms d'interface, il ne regarde que des strucutres !
// pour éviter certaines erreur, on doit lui faire différencier les interfaces avec
// le branding ou nominal typing pour éviter d'autoriser qu'une interface soit utiliser
// à la place d'une autre dans certains contexte

// Interfaces avec brand
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Fonctions pour sommer les crédits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}