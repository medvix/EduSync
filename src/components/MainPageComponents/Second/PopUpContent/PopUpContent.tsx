import React, { useState } from 'react';
import './PopUpContent.scss';

interface TheorySlide {
    type: "Theory";
    title: string;
    content: string;
}

interface PracticalSlide {
    type: "Practical";
    title: string;
    content: string;
    exercise: any;
}

interface ConclusionSlide {
    type: "Conclusion";
    title: string;
    content: string;
}

type Slide = TheorySlide | PracticalSlide | ConclusionSlide;

interface Pair {
    id: string;
    left: string;
    right: string;
    selectedLeft?: boolean;
    selectedRight?: boolean;
}

interface Selection {
    [id: string]: { left?: boolean; right?: boolean };
}

interface MatchingSelections {
    [key: string]: { left?: boolean; right?: boolean };
}

interface Exercise {
    type: string;
    questions?: Question[];
    blanks?: { [key: string]: string };
    pairs?: Pair[];
}

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const PopUpContent = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [question: string]: string }>({});
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [filledBlanks, setFilledBlanks] = useState<{ [key: string]: string }>({});

    const [checkResult, setCheckResult] = useState<string | null>(null);

    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [selectedPairs, setSelectedPairs] = useState<{ [leftItem: string]: string }>({});
    const [resultMessage, setResultMessage] = useState<string>('');




    const theorySlides: TheorySlide[] = [
        {
            type: "Theory",
            title: "Komplexný Pohľad na Webhosting",
            content:"<h2>Webhosting: Kľúčová Služba Pre Webové Stránky</h2>\n" +
                "<p>Webhosting je kľúčovou službou pre každú webovú stránku. Jeho výber a nastavenie môžu mať výrazný dopad na výkon, dostupnosť a bezpečnosť vašej stránky. Poďme sa bližšie pozrieť na rôzne aspekty webhostingu, ktoré by ste mali zvážiť.</p>\n" +
                "\n" +
                "<h3>Typy Webhostingu</h3>\n" +
                "<ul>\n" +
                "  <li><b>Zdieľaný hosting:</b> Ide o najekonomickejšiu možnosť, vhodnú pre menšie webové stránky a blogy. Vaša stránka zdieľa serverové zdroje s inými stránkami.</li>\n" +
                "  <li><b>VPS (Virtual Private Server):</b> Ponúka viac kontroly a zdrojov ako zdieľaný hosting. Je vhodný pre stredne veľké stránky s vyšším návštevníckym trafficom.</li>\n" +
                "  <li><b>Cloud hosting:</b> Flexibilný a škálovateľný, ideálny pre veľké e-commerce stránky alebo stránky s vysokým trafficom. Umožňuje ľahké prispôsobenie zdrojov podľa aktuálnej potreby.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<h3>Zabezpečenie a SSL Certifikáty</h3>\n" +
                "<p>Bezpečnosť webstránky je nevyhnutná, a tu prichádza do hry SSL (Secure Sockets Layer). SSL certifikáty sú štandardom pre zabezpečenie internetových pripojení a ochranu citlivých dát. Sú nevyhnutné pre e-commerce stránky, pretože zabezpečujú bezpečný prenos informácií ako sú kreditné kartové údaje.</p>\n" +
                "\n" +
                "<h3>Výber Správneho Hostingu</h3>\n" +
                "<p>Pri výbere hostingu zvážte:</p>\n" +
                "<ul>\n" +
                "  <li><b>Veľkosť a typ vašej stránky:</b> Menšie stránky potrebujú menej zdrojov, väčšie e-commerce stránky potrebujú robustnejšie hostingové riešenia.</li>\n" +
                "  <li><b>Traffic:</b> Ak očakávate vysoký počet návštevníkov, vyberte hosting s vyššou šírkou pásma a lepšou dostupnosťou.</li>\n" +
                "  <li><b>Bezpečnostné požiadavky:</b> Pre stránky spracúvajúce citlivé údaje je nevyhnutné mať SSL certifikát a solídne bezpečnostné opatrenia.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<h3>DNS a Doménové Mená</h3>\n" +
                "<p>DNS (Domain Name System) je ako adresár internetu, ktorý prevádza ľahko zapamätateľné doménové mená (napr. www.priklad.com) na IP adresy, ktoré sú nevyhnutné pre lokalizáciu serverov a stránok na internete. Správna konfigurácia DNS je kľúčová pre rýchle a spoľahlivé načítanie vašej stránky.</p>\n" +
                "\n" +
                "<p>Webhosting je zložitý, ale zásadný prvok každej webovej stránky. Správny výber a nastavenie hostingu môže výrazne prispieť k úspechu vašej online prítomnosti.</p>\n"
        },
        {
            type: "Theory",
            title: "Hlboký Pohľad na HTML a PHP",
            content: "<p>HTML a PHP sú dve základné technológie používané na vytváranie dynamických webových stránok. Poďme sa pozrieť na ich hlavné charakteristiky a spôsoby, akými spolupracujú na vytváraní bohatých webových aplikácií.</p>\n" +
                "\n" +
                "<h3>Základy HTML</h3>\n" +
                "<p>HTML (HyperText Markup Language) je značkovací jazyk používaný na štruktúrovanie obsahu na webe. Pomocou značiek HTML môžete definovať rôzne prvky, ako sú odseky, nadpisy, zoznamy a odkazy.</p>\n" +
                "\n" +
                "<h4>Kľúčové Prvky HTML</h4>\n" +
                "<ul>\n" +
                "  <li><b>Nadpisy:</b> Sú definované pomocou značiek od <code>&lt;h1&gt;</code> do <code>&lt;h6&gt;</code>.</li>\n" +
                "  <li><b>Paragrafy:</b> Sú vytvorené pomocou značky <code>&lt;p&gt;</code>.</li>\n" +
                "  <li><b>Odkazy:</b> Sú reprezentované značkou <code>&lt;a&gt;</code>.</li>\n" +
                "  <li><b>Zoznamy:</b> Môžu byť usporiadané (<code>&lt;ol&gt;</code>) alebo neusporiadané (<code>&lt;ul&gt;</code>).</li>\n" +
                "</ul>\n" +
                "\n" +
                "<h3>Základy PHP</h3>\n" +
                "<p>PHP (Hypertext Preprocessor) je skriptovací jazyk na strane servera používaný na vytváranie dynamického obsahu. PHP skripty sú vykonávané na serveri a výsledok je odosielaný späť do prehliadača ako obyčajný HTML.</p>\n" +
                "\n" +
                "<h4>Integrácia PHP a HTML</h4>\n" +
                "<p>PHP a HTML môžu byť kombinované v jednom súbore. PHP skripty sú vložené do HTML pomocou značiek <code>&lt;?php ... ?&gt;</code>. Táto kombinácia umožňuje vytváranie dynamických webových stránok, kde obsah sa môže meniť podľa užívateľských interakcií alebo iných podmienok.</p>\n" +
                "\n" +
                "<h4>Príklady Použitia PHP</h4>\n" +
                "<ul>\n" +
                "  <li>Pripojenie k databáze a získavanie dát.</li>\n" +
                "  <li>Posielanie dát z formulárov na server pre spracovanie.</li>\n" +
                "  <li>Generovanie dynamického obsahu na základe užívateľských akcií.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<p>Táto kombinácia HTML a PHP je základom pre mnohé moderné webové aplikácie, umožňujúca vytváranie komplexných a interaktívnych webových stránok.</p>\n"
        },
        {
            type: "Theory",
            title: "Podrobnosti o Vektorovom Designe a Tvorbe Loga",
            content: "<p>Vektorový design je kritický aspekt vytvárania grafiky, najmä pri tvorbe log. Vektorová grafika používa geometrické tvary, ktoré umožňujú presné a flexibilné designy. Poďme sa pozrieť na to, prečo je vektorový design tak dôležitý v grafickom dizajne a ako sa využíva v procese tvorby loga.</p>\n" +
                "\n" +
                "<h3>Výhody Vektorového Designu</h3>\n" +
                "<ul>\n" +
                "  <li><b>Škálovateľnosť:</b> Vektorové obrázky môžu byť zväčšené alebo zmenšené bez straty kvality.</li>\n" +
                "  <li><b>Presnosť:</b> Vektorové obrázky sú tvorené pomocou presných rovníc, čo zaručuje čisté a definované línie.</li>\n" +
                "  <li><b>Editovateľnosť:</b> Jednotlivé prvky vektorových obrázkov môžu byť ľahko upravené vo farbe, tvare alebo veľkosti.</li>\n" +
                "  <li><b>Ideálne pre tlač:</b> Vektorové grafiky sú perfektné pre tlač, pretože zabezpečujú konzistentnú kvalitu bez ohľadu na veľkosť.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<h3>Základy Tvorby Loga</h3>\n" +
                "<p>Tvorba loga je proces, kde sa využívajú princípy vektorového designu na vytvorenie unikátneho a zapamätateľného vizuálneho identifikátora pre značku alebo spoločnosť.</p>\n" +
                "\n" +
                "<h4>Proces Návrhu Loga</h4>\n" +
                "<ol>\n" +
                "  <li><b>Výskum a Konceptualizácia:</b> Začína sa výskumom a vývojom konceptu loga, ktorý odráža hodnoty a identitu značky.</li>\n" +
                "  <li><b>Skečovanie a Návrh:</b> Následuje skečovanie nápadov a prevedenie týchto nápadov do digitálnej formy pomocou vektorového softvéru.</li>\n" +
                "  <li><b>Revízia a Finalizácia:</b> Po viacerých revíziách a úpravách je logo dokončené a pripravené na použitie.</li>\n" +
                "</ol>\n" +
                "\n" +
                "<h3>Softvér pre Vektorový Design</h3>\n" +
                "<p>Na vytváranie vektorovej grafiky sa používajú špeciálne grafické programy, ako Adobe Illustrator alebo Inkscape. Tieto nástroje poskytujú rozsiahle možnosti pre tvorbu a úpravu vektorových obrázkov.</p>\n" +
                "\n" +
                "<p>Správne navrhnuté logo môže významne prispieť k úspechu značky. Využitie vektorového designu v procese tvorby loga zaisťuje, že logo bude flexibilné, škálovateľné a efektívne vo viacerých médiách a aplikáciách.</p>\n"
        },
        {
            type: "Theory",
            title: "Komplexné Informácie o Custom Fontoch na Webstránkach",
            content: "<p>Vlastné písma, známe tiež ako custom fonty, sú neoddeliteľnou súčasťou web dizajnu, pretože prispievajú k jedinečnému vzhľadu a pocitu webstránky. V tejto časti sa pozrieme na to, ako custom fonty ovplyvňujú web dizajn a ako ich možno efektívne implementovať.</p>\n" +
                "\n" +
                "<h3>Výhody Použitia Custom Fontov</h3>\n" +
                "<ul>\n" +
                "  <li><b>Jedinečná Identita Značky:</b> Custom fonty môžu pomôcť vytvoriť jedinečnú vizuálnu identitu pre značku alebo webstránku.</li>\n" +
                "  <li><b>Vylepšená Čitateľnosť a Dostupnosť:</b> Správne vybrané fonty môžu vylepšiť čitateľnosť textu a zároveň zvýšiť dostupnosť webstránky.</li>\n" +
                "  <li><b>Kreatívna Sloboda:</b> Custom fonty ponúkajú väčšiu kreatívnu slobodu v porovnaní so štandardnými web písmami.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<h3>Technické Aspekty Implementácie Fontov</h3>\n" +
                "<p>Implementácia custom fontov na webstránkach zahŕňa niekoľko technických krokov a rozhodnutí, ktoré je potrebné zvážiť.</p>\n" +
                "\n" +
                "<h4>Výber a Získavanie Fontov</h4>\n" +
                "<p>Je dôležité vybrať také písma, ktoré sú licenčne vhodné na použitie na webe. Fonty môžu byť získané z rôznych online zdrojov, ako sú Google Fonts, Adobe Fonts alebo iné komerčné zdroje.</p>\n" +
                "\n" +
                "<h4>Formáty Fontov pre Web</h4>\n" +
                "<ul>\n" +
                "  <li><b>WOFF:</b> Web Open Font Format, optimalizovaný pre použitie na webe.</li>\n" +
                "  <li><b>WOFF2:</b> Vylepšená verzia WOFF s lepšou kompresiou.</li>\n" +
                "  <li><b>TTF/OTF:</b> Tradičné fontové formáty, ktoré môžu byť tiež použité na webe.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<h4>Implementácia Pomocou CSS</h4>\n" +
                "<p>Custom fonty sa implementujú na webstránke pomocou CSS pravidiel. Kľúčovou súčasťou je pravidlo <code>@font-face</code>, ktoré umožňuje definovať custom fonty a ich zdroje.</p>\n" +
                "\n" +
                "<h3>Optimalizácia a Výkon</h3>\n" +
                "<p>Je dôležité optimalizovať načítanie fontov, aby sa zabezpečilo, že neovplyvnia rýchlosť načítania webstránky. Techniky, ako sú prednačítanie fontov a použitie fallback fontov, môžu pomôcť minimalizovať dopad na výkon.</p>\n" +
                "\n" +
                "<p>Využitím custom fontov efektívne a zodpovedne môžu webdizajnéri výrazne prispieť k estetike a používateľskej skúsenosti webstránky, zatiaľ čo zabezpečia jej rýchlu a hladkú funkčnosť.</p>\n"
        }
    ];



    const practicalSlides: PracticalSlide[] = [
        {
            type: "Practical",
            title: "Kvíz: Základy Webhostingu",
            content: "Otestujte svoje znalosti o webhostingu.",
            exercise: {
                type: "multiple-choice",
                questions: [
                    {
                        question: "Ktorý hosting je najlepší pre veľké e-commerce stránky?",
                        options: ["Zdieľaný hosting", "VPS", "Cloud hosting"],
                        correctAnswer: "Cloud hosting"
                    },
                    {
                        question: "Aký protokol je bežne používaný na zabezpečenie prenosu dát medzi klientom a serverom?",
                        options: ["HTTP", "FTP", "HTTPS"],
                        correctAnswer: "HTTPS"
                    }
                ]
            }
        },
        {
            type: "Practical",
            title: "Kvíz: HTML a PHP",
            content: "Otestujte svoje znalosti v HTML a PHP.",
            exercise: {
                type: "multiple-choice",
                questions: [
                    {
                        question: "Ktorý z týchto tagov je samouzatvárací v HTML?",
                        options: ["<div>", "<img>", "<p>"],
                        correctAnswer: "<img>"
                    },
                    {
                        question: "Ktorá PHP funkcia sa používa na pripojenie k databáze MySQL?",
                        options: ["mysql_connect()", "connect_db()", "mysqli_connect()"],
                        correctAnswer: "mysqli_connect()"
                    }
                ]
            }
        },
        {
            type: "Practical",
            title: "Kvíz: Vektorové Logo Design",
            content: "Otestujte svoje znalosti o vektorových logách.",
            exercise: {
                type: "multiple-choice",
                questions: [
                    {
                        question: "Ktorý softvér je primárne používaný na vektorový design?",
                        options: ["Adobe Photoshop", "Adobe Illustrator", "GIMP"],
                        correctAnswer: "Adobe Illustrator"
                    },
                    {
                        question: "Čo je kľúčové pri návrhu loga?",
                        options: ["Použitie veľa farieb", "Zložitosť dizajnu", "Jednoduchosť a rozpoznateľnosť"],
                        correctAnswer: "Jednoduchosť a rozpoznateľnosť"
                    }
                ]
            }
        },
        {
            type: "Practical",
            title: "Kvíz: Custom Fonty pre Web",
            content: "Otestujte svoje znalosti o custom fontoch pre web.",
            exercise: {
                type: "multiple-choice",
                questions: [
                    {
                        question: "Ktorý formát fontu je najviac rozšírený pre web?",
                        options: ["TTF", "OTF", "WOFF"],
                        correctAnswer: "WOFF"
                    },
                    {
                        question: "Ktorá CSS vlastnosť umožňuje definovať štýl písma?",
                        options: ["font-style", "font-weight", "font-family"],
                        correctAnswer: "font-family"
                    }
                ]
            }
        },
        {
            type: "Practical",
            title: "Vyplňte Prázdne Miesta: Custom Fonty",
            content: "Priraďte správne pojmy do prázdnych miest vo vetách.",
            exercise: {
                type: "drag-and-drop",
                text: ["Pre vloženie vlastného fontu na webstránku používame CSS príkaz ", "____", " a formát fontu ", "____", "."],
                blanks: { blank1: "@font-face", blank2: "WOFF2" },
                options: ["@font-face", "font-family", "WOFF2", "SVG", "TrueType"]
            }
        }
    ];

    const conclusionSlide: ConclusionSlide = {
        type: "Conclusion",
        title: "Summary of Key Concepts",
        content: `
        <h2>Zhrnutie Kľúčových Konceptov Kurzu</h2>
        <p>Tento kurz poskytol hlboký pohľad na rôzne aspekty webového dizajnu a vývoja, od základov webhostingu, cez jazyky HTML a PHP, až po sofistikované techniky vektorového dizajnu a implementáciu custom fontov.</p>

        <h3>Webhosting a Jeho Dôležitosť</h3>
        <p>Začali sme s pochopením webhostingu, jeho rôznych typov, ako sú zdieľaný hosting, VPS a cloud hosting, a ich významu pre výkon, dostupnosť a bezpečnosť webových stránok.</p>

        <h3>Základy HTML a PHP</h3>
        <p>Pokračovali sme hlbokým pohľadom na HTML a PHP, zdôrazňujúc ich spoluprácu pri tvorbe dynamických webových stránok. Zdôraznili sme dôležitosť správneho použitia HTML značiek a PHP skriptovania pre efektívne webové aplikácie.</p>

        <h3>Vektorový Dizajn a Tvorba Loga</h3>
        <p>Prebrali sme princípy vektorového dizajnu, jeho výhody pri tvorbe log, a proces od návrhu až po finalizáciu loga, zdôrazňujúc dôležitosť kreativity a jednoduchosti v dizajne.</p>

        <h3>Custom Fonty na Webstránkach</h3>
        <p>Záverečná časť kurzu sa zameriavala na použitie custom fontov na webstránkach, ich technickú implementáciu, a význam pre vizuálnu estetiku a značkovú identitu.</p>

        <p>Celkovo tento kurz poskytol komplexný prehľad o kľúčových aspektoch webového dizajnu a vývoja, a dal absolventom solídne základy pre ich ďalší profesionálny rast a rozvoj v tejto dynamicky sa vyvíjajúcej oblasti.</p>
    `
    };



    const slides: Slide[] = [...theorySlides, ...practicalSlides, conclusionSlide];

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide + 1);
        setSelectedOption(null);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide - 1);
        setSelectedOption(null);
    };

    const handleMultipleChoiceSelection = (question: string, option: string) => {
        setSelectedAnswers(prev => ({ ...prev, [question]: option }));
    };

    const isAnswerCorrect = (question: string, option: string) => {
        const currentExercise = (slides[currentSlide] as PracticalSlide).exercise;
        if (currentExercise.type === "multiple-choice") {
            const correctAnswer = currentExercise.questions.find((q: any) => q.question === question).correctAnswer;
            return option === correctAnswer;
        }
        return false;
    };

    const renderMultipleChoiceQuestions = (exercise: any) => {
        return (
            <div>
                {exercise.questions.map((question: any, index: number) => (
                    <div key={index} className="quiz-question">
                        <p>{question.question}</p>
                        {question.options.map((option: string, optIndex: number) => (
                            <button
                                key={optIndex}
                                onClick={() => handleMultipleChoiceSelection(question.question, option)}
                                className={selectedAnswers[question.question] === option ? 'selected' : ''}
                            >
                                {option}
                            </button>
                        ))}
                        {selectedAnswers[question.question] &&
                            <p className={isAnswerCorrect(question.question, selectedAnswers[question.question]) ? 'correct' : 'incorrect'}>
                                {isAnswerCorrect(question.question, selectedAnswers[question.question]) ? 'Correct answer!' : 'Incorrect answer.'}
                            </p>
                        }
                    </div>
                ))}
            </div>
        );
    };

    const handleDragStart = (item: string, fromBlank: boolean = false) => {
        if (fromBlank) {
            const updatedBlanks = { ...filledBlanks };
            for (const key in updatedBlanks) {
                if (updatedBlanks[key] === item) {
                    updatedBlanks[key] = "____";
                    break;
                }
            }
            setFilledBlanks(updatedBlanks);
        }
        setDraggedItem(item);
    };


    const handleDrop = (blankIndex: number) => {
        if (draggedItem) {
            const blankKey = `blank${blankIndex + 1}`;
            setFilledBlanks(prev => ({ ...prev, [blankKey]: draggedItem }));
            setDraggedItem(null);
        }
    };


    const checkAnswers = () => {
        const currentSlideData = slides[currentSlide] as PracticalSlide;
        if (currentSlideData.type === "Practical" && currentSlideData.exercise.type === "drag-and-drop") {
            let allCorrect = true;
            const { blanks } = currentSlideData.exercise;

            for (const blankKey in blanks) {
                if (!Object.values(filledBlanks).includes(blanks[blankKey])) {
                    allCorrect = false;
                    break;
                }
            }

            setCheckResult(allCorrect ? "All answers are correct!" : "Some answers are incorrect.");
        }
    };

    const renderDragAndDropExercise = (exercise: any) => {
        return (
            <div>
                <div className="exercise-text">
                    {exercise.text.map((part: string, index: number) => (
                        part === "____" ?
                            <div
                                key={index}
                                className="blank"
                                onDrop={() => handleDrop(index)}
                                onDragOver={(e) => e.preventDefault()}
                                draggable
                                onDragStart={() => handleDragStart(filledBlanks[`blank${index + 1}`], true)}
                            >
                                {filledBlanks[`blank${index + 1}`] || part}
                            </div> :
                            <span key={index}>{part}</span>
                    ))}
                </div>
                <div className="options">
                    {exercise.options.map((option: string, index: number) => (
                        <div
                            key={index}
                            className="draggable-option"
                            draggable
                            onDragStart={() => handleDragStart(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
                <button onClick={checkAnswers} className="check-answers-btn">
                    Check Answers
                </button>
                {checkResult && (
                    <div className={`check-result ${checkResult === "All answers are correct!" ? 'correct' : 'incorrect'}`}>
                        {checkResult}
                    </div>
                )}
            </div>
        );
    };

    const renderExerciseContent = (exercise: any) => {
        switch (exercise.type) {
            case 'multiple-choice':
                return renderMultipleChoiceQuestions(exercise);
            case 'drag-and-drop':
                return renderDragAndDropExercise(exercise);
            default:
                return null;
        }
    };

    const renderSlideContent = () => {
        const slide = slides[currentSlide];

        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                {slide.type === 'Practical' && renderExerciseContent(slide.exercise)}
            </div>
        );
    };


    return (
        <div className="popup-content">
            <h2>{slides[currentSlide].title}</h2>
            {renderSlideContent()}
            <div className="navigation-buttons">
                <button onClick={goToPreviousSlide} disabled={currentSlide === 0}>Predošlá</button>
                <button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>Ďalšia</button>
            </div>
        </div>
    );
};

export default PopUpContent;
