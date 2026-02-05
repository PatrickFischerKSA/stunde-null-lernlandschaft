const quizzes = {
  roadtrip: {
    title: 'Roadtrip 1945',
    questions: [
      {
        type: 'text',
        prompt: 'Warum ist Freddy Gray (Manfred Gans) im Mai 1945 unterwegs? (Stichworte reichen)',
        keywords: ['eltern', 'theresienstadt', 'suchen', 'deportiert', 'lager'],
        minMatch: 2,
        explanation:
          'Freddy erfährt, dass seine Eltern nach Theresienstadt verschleppt wurden und macht sich sofort auf den Weg.'
      },
      {
        prompt: 'Warum ist Freddy Gray (Manfred Gans) im Mai 1945 unterwegs?',
        options: [
          'Er sucht seine in Theresienstadt deportierten Eltern.',
          'Er soll deutsche Städte für die Alliierten verwalten.',
          'Er begleitet eine Journalisten-Delegation.',
          'Er kehrt als Tourist in die Niederlande zurück.'
        ],
        answer: 0,
        explanation: 'Freddy erfährt, dass seine Eltern nach Theresienstadt verschleppt wurden und macht sich sofort auf den Weg.'
      },
      {
        prompt: 'Wie lautet Freddys echter Name?',
        options: ['Manfred Gans', 'Friedrich Grau', 'Karl Ganz', 'Moritz Gans'],
        answer: 0,
        explanation: 'In der britischen Armee trägt er die Tarnidentität Frederick (Freddy) Gray.'
      },
      {
        prompt: 'Womit verdienten Freddys Eltern in Borken ihr Geld?',
        options: [
          'Mit einer Exportfirma für Textilien und Schneiderbedarf.',
          'Mit einem Kohlebergwerk.',
          'Mit einem landwirtschaftlichen Großbetrieb.',
          'Mit einer Schiffswerft.'
        ],
        answer: 0,
        explanation: 'Die Familie Gans führte eine gut gehende Exportfirma für Textilien und Schneiderbedarf.'
      },
      {
        prompt: 'Welche Hafenstadt war im Herbst 1944 besonders hart umkämpft?',
        options: ['Antwerpen', 'Rotterdam', 'Hamburg', 'Le Havre'],
        answer: 0,
        explanation: 'In Zeeland wird von schweren Kämpfen um die Hafenstadt Antwerpen berichtet.'
      },
      {
        type: 'text',
        prompt: 'Was war die X‑Troop? (Kurz erklären)',
        keywords: ['spezialeinheit', 'britisch', 'deutsch', 'sprache', 'verhör', 'aufklärung', 'jüdisch'],
        minMatch: 2,
        explanation:
          'Die X‑Troop war eine britische Spezialeinheit aus deutschsprachigen (meist jüdischen) Soldaten für Aufklärung und Verhöre.'
      },
      {
        prompt: 'Was beschreibt den Atlantikwall am treffendsten?',
        options: [
          'Eine 2.500 km lange Verteidigungslinie mit Bunkern, errichtet durch Zwangsarbeiter.',
          'Eine Evakuierungsroute für die Wehrmacht.',
          'Ein Versorgungskorridor der Alliierten.',
          'Ein geheimes Funknetz der Resistance.'
        ],
        answer: 0,
        explanation: 'Der Atlantikwall sollte die Invasion verhindern und bestand aus Bunkern entlang der Küsten.'
      },
      {
        prompt: 'Wofür stand die X-Troop?',
        options: [
          'Britische Spezialeinheit aus deutschsprachigen (meist jüdischen) Soldaten für Aufklärung und Verhöre.',
          'Amerikanische Versorgungseinheit für Feldlazarette.',
          'Sowjetische Panzereinheit in Berlin.',
          'Eine deutsche Widerstandsgruppe in Münster.'
        ],
        answer: 0,
        explanation: 'Die X-Troop nutzte deutsche Sprache und Kulturkenntnis für Infiltration, Aufklärung und Verhör.'
      },
      {
        prompt: 'Warum wurde die deutsche Kapitulation zweimal unterzeichnet?',
        options: [
          'Erst in Reims, dann auf Wunsch der Sowjets am 9. Mai in Berlin-Karlshorst.',
          'Weil die erste Unterzeichnung ungültig war.',
          'Weil die USA eine gesonderte Kapitulation verlangten.',
          'Weil Deutschland erneut mobilisierte.'
        ],
        answer: 0,
        explanation: 'Die Sowjets verlangten eine zweite Unterzeichnung im Hauptquartier der Roten Armee.'
      },
      {
        type: 'text',
        prompt: 'Warum wurde Theresienstadt kurz nach der Befreiung unter Quarantäne gestellt?',
        keywords: ['fleckfieber', 'seuche', 'epidemie', 'quarantäne', 'ausbruch'],
        minMatch: 1,
        explanation:
          'Wegen eines Fleckfieber-Ausbruchs im überfüllten Lager ordnete der sowjetische Kommandant Quarantäne an.'
      },
      {
        prompt: 'Wann startet Freddys Reise laut Bericht?',
        options: ['12. Mai 1945', '8. Mai 1945', '1. Juni 1945', '25. März 1945'],
        answer: 0,
        explanation: 'Im Bericht ist der 12. Mai 1945 als erster Reisetag festgehalten.'
      },
      {
        prompt: 'Was sieht Freddy in Kleve, der ersten deutschen Stadt seiner Route?',
        options: [
          'Die Altstadt ist zu etwa 80 Prozent zerstört.',
          'Die Stadt ist weitgehend unversehrt.',
          'Die Bevölkerung feiert den Sieg.',
          'Die Stadt ist vollständig evakuiert.'
        ],
        answer: 0,
        explanation: 'Kleve ist schwer zerstört; die Altstadt liegt zu rund 80 Prozent in Trümmern.'
      },
      {
        prompt: 'Welche Aussage trifft den Mythos der „Trümmerfrauen“ am besten?',
        options: [
          'Viele Aufnahmen waren gestellt, Aufräumarbeiten dienten auch als Strafe für ehemalige NSDAP-Mitglieder.',
          'Die Arbeit wurde ausschließlich von freiwilligen Frauen organisiert.',
          'Die Trümmer wurden nur durch Militärs beseitigt.',
          'Der Begriff entstand erst in den 1990er Jahren.'
        ],
        answer: 0,
        explanation: 'Das Bild der fröhlichen Trümmerfrauen ist stark idealisiert; Aufräumen war oft Zwangsarbeit oder Strafe.'
      },
      {
        prompt: 'Wann wurde das Fraternisierungsverbot aufgehoben?',
        options: ['Oktober 1945', 'Mai 1945', 'Januar 1946', 'Juni 1944'],
        answer: 0,
        explanation: 'Im Herbst 1945 wurde das strenge Verbot schrittweise aufgehoben.'
      },
      {
        prompt: 'Warum wurde Theresienstadt kurz nach der Befreiung unter Quarantäne gestellt?',
        options: [
          'Wegen eines Fleckfieber-Ausbruchs im überfüllten Lager.',
          'Weil das Lager vollständig geräumt werden sollte.',
          'Weil neue Deportationen bevorstanden.',
          'Weil die Rote Armee das Lager als Gefängnis nutzen wollte.'
        ],
        answer: 0,
        explanation: 'Transporter aus dem Osten brachten Fleckfieber; daher ordnete der sowjetische Kommandant Quarantäne an.'
      },
      {
        prompt: 'Wohin emigriert Anita Lam mit ihrer Familie?',
        options: ['Nach New York', 'Nach London', 'Nach Tel Aviv', 'Nach Zürich'],
        answer: 0,
        explanation: 'Anita flieht 1938/39 aus Deutschland und emigriert mit ihrer Familie nach New York.'
      }
    ]
  },
  ueberleben: {
    title: 'Überleben 1945',
    questions: [
      {
        type: 'text',
        prompt: 'Was war die „Trolley-Mission“? (Stichworte reichen)',
        keywords: ['rundflug', 'us', 'air force', 'zerstörung', 'trümmer', 'touristen'],
        minMatch: 2,
        explanation:
          'US-Bomber flogen Rundtouren, um dem Bodenpersonal das Ausmaß der Zerstörung zu zeigen.'
      },
      {
        prompt: 'Was war die „Trolley-Mission“ im Mai 1945?',
        options: [
          'Rundflüge der US Air Force, um dem Bodenpersonal die Zerstörung zu zeigen.',
          'Eine geheime Evakuierungsaktion für Gefangene.',
          'Eine Offensive auf die Rheinbrücken.',
          'Ein Versorgungskorridor für Städte.'
        ],
        answer: 0,
        explanation: 'Die Bomber flogen als „Trümmer-Touristen“ – keine Angriffe, sondern Demonstrationsflüge.'
      },
      {
        prompt: 'Welche Städte lagen auf der Nordroute der Trümmerflüge?',
        options: [
          'Münster, Bremen, Hamburg, Dortmund',
          'München, Nürnberg, Stuttgart, Augsburg',
          'Berlin, Dresden, Leipzig, Jena',
          'Köln, Frankfurt, Mannheim, Saarbrücken'
        ],
        answer: 0,
        explanation: 'Die Nordroute überflog mehrere Städte Nord- und Westdeutschlands.'
      },
      {
        prompt: 'Wie viele Menschen waren 1945 in Deutschland obdachlos?',
        options: ['18 Millionen', '5 Millionen', '2 Millionen', '30 Millionen'],
        answer: 0,
        explanation: 'Im Dokument wird von 18 Mio. Obdachlosen gesprochen.'
      },
      {
        prompt: 'Was geschah in Pforzheim im Februar 1945?',
        options: [
          'Ein britischer Angriff tötete etwa 17.600 Menschen (ein Drittel der Bevölkerung).',
          'Die Stadt wurde zur Hauptstadt erklärt.',
          'Die Stadt blieb nahezu unversehrt.',
          'Ein Großbrand zerstörte ein Munitionslager ohne Opfer.'
        ],
        answer: 0,
        explanation: 'Pforzheim wurde schwer bombardiert; die Zahl der Opfer war extrem hoch.'
      },
      {
        prompt: 'Wie viele Flüchtlinge aus den ehemaligen Ostgebieten suchten eine neue Heimat?',
        options: ['Über 10 Millionen', 'Unter 1 Million', '3 Millionen', '20 Millionen'],
        answer: 0,
        explanation: 'Aus Ostpreußen, Schlesien und Pommern waren über 10 Mio. Menschen unterwegs.'
      },
      {
        prompt: 'Wie viele deutsche Soldaten gerieten bei Kriegsende in alliierte Gefangenschaft?',
        options: ['Etwa 11 Millionen', 'Etwa 1 Million', 'Etwa 25 Millionen', 'Etwa 4 Millionen'],
        answer: 0,
        explanation: 'Das Dokument nennt rund 11 Mio. Kriegsgefangene.'
      },
      {
        type: 'text',
        prompt: 'Nenne zwei Probleme in den Rheinwiesenlagern.',
        keywords: ['überfüll', 'hygiene', 'trinkwasser', 'versorgung', 'klo', 'seuche'],
        minMatch: 2,
        explanation:
          'Genannt werden Überfüllung, schlechte Versorgung/Trinkwasser und katastrophale Hygiene.'
      },
      {
        prompt: 'Was kennzeichnete die Rheinwiesenlager?',
        options: [
          'Extreme Überfüllung, schlechte Versorgung und katastrophale Hygiene.',
          'Komfortable Unterkünfte mit medizinischer Vollversorgung.',
          'Kleine Lager für jeweils maximal 1.000 Personen.',
          'Ausschließlich zivile Internierungslager.'
        ],
        answer: 0,
        explanation: 'Lager für 20.000 waren mit 30.000 bis 50.000 Menschen belegt.'
      },
      {
        prompt: 'Worauf zielten amerikanische Tieflieger ab 1944 vor allem?',
        options: [
          'Bahnhöfe, Züge und Verkehrswege',
          'Ausschließlich Bauernhöfe',
          'Nur militärische Kasernen außerhalb der Städte',
          'Allein auf Häfen an der Nordsee'
        ],
        answer: 0,
        explanation: 'Der Fokus lag auf Transportwegen, traf aber auch Innenstädte und Siedlungen.'
      },
      {
        prompt: 'Warum gilt der Bombenkrieg als doppelter Fehlschlag?',
        options: [
          'Die Angriffe auf Zivilstädte brachen die Moral nicht und die Industrie blieb leistungsfähig.',
          'Er stoppte die Produktion vollständig und beendete den Krieg sofort.',
          'Er führte zu einer sofortigen Kapitulation 1942.',
          'Er konnte nur von der Sowjetunion geführt werden.'
        ],
        answer: 0,
        explanation: 'Der erhoffte Widerstand gegen das Regime blieb aus, zudem blieb die Industrie teils leistungsfähig.'
      },
      {
        prompt: 'Welche Aussage zu Kindern nach dem Krieg trifft zu?',
        options: [
          'Etwa 20 Millionen wurden Halbwaisen, rund 500.000 hatten keine Eltern mehr.',
          'Es gab keine Auswirkungen auf Kinder.',
          'Nur 50.000 Kinder waren betroffen.',
          'Alle Kinder wurden sofort in Pflegefamilien untergebracht.'
        ],
        answer: 0,
        explanation: 'Das Dokument nennt 20 Mio. Halbwaisen und etwa eine halbe Million Vollwaisen.'
      }
    ]
  }
};

function renderQuiz(container, quiz) {
  let score = 0;
  let answered = 0;

  const meta = document.createElement('div');
  meta.className = 'quiz-meta';
  const scoreEl = document.createElement('span');
  scoreEl.textContent = `0 / ${quiz.questions.length} richtig`;
  const resetBtn = document.createElement('button');
  resetBtn.className = 'reset-btn';
  resetBtn.textContent = 'Zurücksetzen';
  meta.append(scoreEl, resetBtn);
  container.append(meta);

  const cards = quiz.questions.map((q, index) => {
    const card = document.createElement('article');
    card.className = 'quiz-card';

    const title = document.createElement('h3');
    title.textContent = `${index + 1}. ${q.prompt}`;

    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'options';

    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.style.display = 'none';

    if (q.type === 'text') {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'text-input';
      input.placeholder = 'Antwort eingeben...';

      const checkBtn = document.createElement('button');
      checkBtn.type = 'button';
      checkBtn.className = 'option-btn';
      checkBtn.textContent = 'Antwort prüfen';

      checkBtn.addEventListener('click', () => {
        if (checkBtn.disabled) return;
        const raw = input.value.trim().toLowerCase();
        const hits = (q.keywords || []).filter((kw) => raw.includes(kw));
        const needed = q.minMatch ?? Math.max(1, Math.ceil((q.keywords || []).length / 2));
        const isCorrect = raw.length > 0 && hits.length >= needed;

        input.disabled = true;
        checkBtn.disabled = true;

        if (isCorrect) {
          checkBtn.classList.add('correct');
          feedback.textContent = `Richtig. ${q.explanation}`;
          score += 1;
        } else {
          checkBtn.classList.add('wrong');
          feedback.textContent = `Noch nicht. ${q.explanation} (Erwartete Stichworte: ${q.keywords.join(', ')})`;
        }
        feedback.style.display = 'block';
        answered += 1;
        scoreEl.textContent = `${score} / ${quiz.questions.length} richtig`;
      });

      optionsWrap.append(input, checkBtn);
    } else {
      q.options.forEach((opt, optIndex) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.type = 'button';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          const buttons = optionsWrap.querySelectorAll('button');
          buttons.forEach((b) => (b.disabled = true));

          const isCorrect = optIndex === q.answer;
          if (isCorrect) {
            btn.classList.add('correct');
            feedback.textContent = `Richtig. ${q.explanation}`;
            score += 1;
          } else {
            btn.classList.add('wrong');
            buttons[q.answer].classList.add('correct');
            feedback.textContent = `Noch nicht. ${q.explanation}`;
          }
          feedback.style.display = 'block';
          answered += 1;
          scoreEl.textContent = `${score} / ${quiz.questions.length} richtig`;
        });
        optionsWrap.append(btn);
      });
    }

    card.append(title, optionsWrap, feedback);
    container.append(card);
    return { card, feedback, optionsWrap };
  });

  resetBtn.addEventListener('click', () => {
    score = 0;
    answered = 0;
    scoreEl.textContent = `${score} / ${quiz.questions.length} richtig`;
    cards.forEach(({ optionsWrap, feedback }) => {
      feedback.style.display = 'none';
      feedback.textContent = '';
      optionsWrap.querySelectorAll('button').forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong');
      });
      optionsWrap.querySelectorAll('input').forEach((input) => {
        input.disabled = false;
        input.value = '';
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach((container) => {
    const key = container.dataset.quiz;
    if (quizzes[key]) {
      renderQuiz(container, quizzes[key]);
    }
  });
});
