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
        type: 'text',
        prompt: 'Wie lautet Freddys echter Name?',
        keywords: ['manfred', 'gans', 'ganz'],
        minMatch: 1,
        explanation: 'In der britischen Armee trägt er die Tarnidentität Frederick (Freddy) Gray.'
      },
      {
        type: 'text',
        prompt: 'Womit verdienten Freddys Eltern in Borken ihr Geld?',
        keywords: ['export', 'textil', 'schneiderbedarf', 'firma'],
        minMatch: 1,
        explanation: 'Die Familie Gans führte eine gut gehende Exportfirma für Textilien und Schneiderbedarf.'
      },
      {
        type: 'text',
        prompt: 'Welche Hafenstadt war im Herbst 1944 besonders hart umkämpft?',
        keywords: ['antwerpen'],
        minMatch: 1,
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
        type: 'text',
        prompt: 'Was beschreibt den Atlantikwall am treffendsten? (Stichworte reichen)',
        keywords: ['verteidigung', 'bunker', 'küste', 'zwangsarbeiter', '2.500'],
        minMatch: 2,
        explanation: 'Der Atlantikwall sollte die Invasion verhindern und bestand aus Bunkern entlang der Küsten.'
      },
      {
        type: 'text',
        prompt: 'Wofür stand die X‑Troop? (Stichworte)',
        keywords: ['britisch', 'spezialeinheit', 'deutsch', 'aufklärung', 'verhör', 'jüdisch'],
        minMatch: 2,
        explanation: 'Die X‑Troop nutzte deutsche Sprache und Kulturkenntnis für Infiltration, Aufklärung und Verhör.'
      },
      {
        type: 'text',
        prompt: 'Warum wurde die deutsche Kapitulation zweimal unterzeichnet?',
        keywords: ['reims', 'karlshorst', 'sowjets', '9. mai', 'zweites'],
        minMatch: 2,
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
        type: 'text',
        prompt: 'Wann startet Freddys Reise laut Bericht? (Datum)',
        keywords: ['12', 'mai', '1945'],
        minMatch: 2,
        explanation: 'Im Bericht ist der 12. Mai 1945 als erster Reisetag festgehalten.'
      },
      {
        type: 'text',
        prompt: 'Was sieht Freddy in Kleve, der ersten deutschen Stadt seiner Route?',
        keywords: ['80', 'prozent', 'zerstört', 'trümmern'],
        minMatch: 2,
        explanation: 'Kleve ist schwer zerstört; die Altstadt liegt zu rund 80 Prozent in Trümmern.'
      },
      {
        type: 'text',
        prompt: 'Was ist am Mythos der „Trümmerfrauen“ problematisch? (Stichworte)',
        keywords: ['gestellt', 'aufnahmen', 'zwang', 'strafe', 'nsdap'],
        minMatch: 2,
        explanation: 'Das Bild der fröhlichen Trümmerfrauen ist stark idealisiert; Aufräumen war oft Zwangsarbeit oder Strafe.'
      },
      {
        type: 'text',
        prompt: 'Wann wurde das Fraternisierungsverbot aufgehoben?',
        keywords: ['oktober', '1945'],
        minMatch: 1,
        explanation: 'Im Herbst 1945 wurde das strenge Verbot schrittweise aufgehoben.'
      },
      {
        type: 'text',
        prompt: 'Wohin emigriert Anita Lam mit ihrer Familie?',
        keywords: ['new york'],
        minMatch: 1,
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
        type: 'text',
        prompt: 'Welche Städte lagen auf der Nordroute der Trümmerflüge?',
        keywords: ['münster', 'bremen', 'hamburg', 'dortmund'],
        minMatch: 2,
        explanation: 'Die Nordroute überflog mehrere Städte Nord- und Westdeutschlands.'
      },
      {
        type: 'text',
        prompt: 'Wie viele Menschen waren 1945 in Deutschland obdachlos?',
        keywords: ['18', 'million'],
        minMatch: 1,
        explanation: 'Im Dokument wird von 18 Mio. Obdachlosen gesprochen.'
      },
      {
        type: 'text',
        prompt: 'Was geschah in Pforzheim im Februar 1945?',
        keywords: ['britisch', 'angriff', '17.600', 'drittel', 'bevölkerung'],
        minMatch: 2,
        explanation: 'Pforzheim wurde schwer bombardiert; die Zahl der Opfer war extrem hoch.'
      },
      {
        type: 'text',
        prompt: 'Wie viele Flüchtlinge aus den ehemaligen Ostgebieten suchten eine neue Heimat?',
        keywords: ['10', 'million', 'ostpreußen', 'schlesien', 'pommern'],
        minMatch: 1,
        explanation: 'Aus Ostpreußen, Schlesien und Pommern waren über 10 Mio. Menschen unterwegs.'
      },
      {
        type: 'text',
        prompt: 'Wie viele deutsche Soldaten gerieten bei Kriegsende in alliierte Gefangenschaft?',
        keywords: ['11', 'million'],
        minMatch: 1,
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
        type: 'text',
        prompt: 'Was kennzeichnete die Rheinwiesenlager?',
        keywords: ['überfüll', 'versorgung', 'hygiene', '30', '50.000'],
        minMatch: 2,
        explanation: 'Lager für 20.000 waren mit 30.000 bis 50.000 Menschen belegt.'
      },
      {
        type: 'text',
        prompt: 'Worauf zielten amerikanische Tieflieger ab 1944 vor allem?',
        keywords: ['bahnhöfe', 'züge', 'verkehrswege'],
        minMatch: 1,
        explanation: 'Der Fokus lag auf Transportwegen, traf aber auch Innenstädte und Siedlungen.'
      },
      {
        type: 'text',
        prompt: 'Warum gilt der Bombenkrieg als doppelter Fehlschlag?',
        keywords: ['moral', 'nicht', 'gebrochen', 'industrie', 'leistungsfähig'],
        minMatch: 2,
        explanation: 'Der erhoffte Widerstand gegen das Regime blieb aus, zudem blieb die Industrie teils leistungsfähig.'
      },
      {
        type: 'text',
        prompt: 'Welche Aussage zu Kindern nach dem Krieg trifft zu?',
        keywords: ['20', 'million', 'halbwaisen', '500.000', 'eltern'],
        minMatch: 2,
        explanation: 'Das Dokument nennt 20 Mio. Halbwaisen und etwa eine halbe Million Vollwaisen.'
      }
    ]
  },
  nachkriegszeit: {
    title: 'Nachkriegszeit in Deutschland',
    questions: [
      {
        type: 'text',
        prompt: 'Was bedeutet der Begriff „Stunde Null“ im Mai 1945?',
        keywords: ['neubeginn', 'zusammenbruch', 'ns', 'kapitulation', 'besatzung'],
        minMatch: 2,
        explanation:
          'Er meint den Beginn von etwas Neuem nach dem Zusammenbruch des NS-Staates, auch wenn Kontinuitäten bleiben.'
      },
      {
        type: 'text',
        prompt: 'Welche vier Siegermächte besetzten Deutschland nach dem Krieg?',
        keywords: ['usa', 'großbritannien', 'frankreich', 'sowjetunion'],
        minMatch: 3,
        explanation: 'Deutschland wurde von USA, Großbritannien, Frankreich und der Sowjetunion besetzt.'
      },
      {
        type: 'text',
        prompt: 'Warum gab es 1945 keine deutsche Nationalregierung?',
        keywords: ['besetzt', 'zusammengebrochen', 'keine', 'regierung'],
        minMatch: 2,
        explanation: 'Der NS-Staat war zusammengebrochen und das Land stand unter Besatzung.'
      },
      {
        type: 'text',
        prompt: 'Nenne zwei typische Tauschgüter auf dem Schwarzmarkt.',
        keywords: ['uhren', 'fotoapparate', 'pelz', 'zigaretten', 'bügeleisen', 'kinderwagen'],
        minMatch: 2,
        explanation:
          'Im Video werden u. a. Uhren, Fotoapparate, Pelzmäntel und Zigaretten genannt.'
      },
      {
        type: 'text',
        prompt: 'Wofür wurden alte Stahlhelme in der Notzeit genutzt?',
        keywords: ['suppentopf', 'kochen', 'stahlhelm'],
        minMatch: 1,
        explanation: 'Aus alten Stahlhelmen wurden Suppentöpfe gemacht.'
      },
      {
        type: 'text',
        prompt: 'Wie viele Flüchtlinge und Vertriebene aus den Ostgebieten mussten untergebracht werden?',
        keywords: ['12', 'million'],
        minMatch: 1,
        explanation: 'Es waren rund 12 Millionen Menschen.'
      },
      {
        type: 'text',
        prompt: 'Warum räumten „Trümmerfrauen“ den Schutt weg?',
        keywords: ['männer', 'gefallen', 'kriegsgefangenschaft', 'ruinen', 'schutt'],
        minMatch: 2,
        explanation: 'Viele Männer waren gefallen oder in Kriegsgefangenschaft, daher übernahmen Frauen die Arbeit.'
      },
      {
        type: 'text',
        prompt: 'Was passierte im Winter 1946/47?',
        keywords: ['bitter', 'kalt', 'winter', '1946', '1947'],
        minMatch: 2,
        explanation: 'Der Winter 1946/47 war extrem kalt und verschärfte die Notlage.'
      },
      {
        type: 'text',
        prompt: 'Wie fühlten sich viele Deutsche nach dem Krieg?',
        keywords: ['besiegt', 'gedemütigt', 'opfer'],
        minMatch: 2,
        explanation: 'Viele fühlten sich besiegt, gedemütigt und sahen sich selbst als Opfer.'
      },
      {
        type: 'text',
        prompt: 'Welche Armeen verübten laut Video Vergewaltigungen?',
        keywords: ['amerikaner', 'russen', 'engländer', 'franzosen'],
        minMatch: 2,
        explanation: 'Genannt werden Amerikaner, Russen, Engländer und Franzosen.'
      }
    ]
  },
  nuernberg: {
    title: 'Nürnberger Prozess',
    questions: [
      {
        type: 'text',
        prompt: 'Wann vereinbarten USA, Sowjetunion und Großbritannien die Anführer der Nazis vor Gericht zu stellen?',
        keywords: ['herbst', '1943'],
        minMatch: 1,
        explanation: 'Bereits im Herbst 1943.'
      },
      {
        type: 'text',
        prompt: 'Wie heißt der internationale Gerichtshof in Nürnberg?',
        keywords: ['international military tribunal', 'imt', 'internationaler militärgerichtshof'],
        minMatch: 1,
        explanation: 'International Military Tribunal (Internationaler Militärgerichtshof).'
      },
      {
        type: 'text',
        prompt: 'Nenne zwei zentrale Anklagekategorien.',
        keywords: ['kriegsverbrechen', 'verbrechen gegen den frieden', 'verbrechen gegen die menschlichkeit'],
        minMatch: 2,
        explanation: 'Kriegsverbrechen, Verbrechen gegen den Frieden, Verbrechen gegen die Menschlichkeit.'
      },
      {
        type: 'text',
        prompt: 'Wie viele Hauptangeklagte standen vor Gericht?',
        keywords: ['21'],
        minMatch: 1,
        explanation: 'Insgesamt 21 Männer.'
      },
      {
        type: 'text',
        prompt: 'Nenne zwei Angeklagte, die im Video erwähnt werden.',
        keywords: ['göring', 'hess', 'speer', 'streicher'],
        minMatch: 2,
        explanation: 'Genannt werden u. a. Hermann Göring, Rudolf Hess, Albert Speer, Julius Streicher.'
      },
      {
        type: 'text',
        prompt: 'Warum sprechen viele Deutsche von „Siegerjustiz“?',
        keywords: ['ungerecht', 'siegreiche', 'kriegsverbrechen', 'bombardierungen'],
        minMatch: 2,
        explanation:
          'Viele hielten den Prozess für ungerecht, weil Verbrechen der Sieger nicht verhandelt wurden.'
      },
      {
        type: 'text',
        prompt: 'In welchem Zeitraum liefen die Hauptverfahren?',
        keywords: ['20', 'november', '1945', '1', 'oktober', '1946'],
        minMatch: 3,
        explanation: 'Vom 20. November 1945 bis zum 1. Oktober 1946.'
      },
      {
        type: 'text',
        prompt: 'Wie viele Angeklagte wurden freigesprochen?',
        keywords: ['drei', '3'],
        minMatch: 1,
        explanation: 'Drei Angeklagte wurden freigesprochen.'
      },
      {
        type: 'text',
        prompt: 'Was geschah mit Hermann Göring vor der Hinrichtung?',
        keywords: ['selbstmord', 'gift', 'nacht', 'hinrichtung'],
        minMatch: 2,
        explanation: 'Er beging in der Nacht vor der Hinrichtung Suizid mit Gift.'
      },
      {
        type: 'text',
        prompt: 'Bis wann gab es weitere Prozesse in Nürnberg?',
        keywords: ['1949'],
        minMatch: 1,
        explanation: 'Bis 1949 folgten weitere Prozesse.'
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
