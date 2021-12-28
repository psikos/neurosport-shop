import React from "react"
import { Link } from "gatsby"

import "./privatePolicy.css"

export default function PrivatePolicy() {
  return (
    <div className="private-policy-wrapper">
      <h1>
        Polityka prywatności serwisu <span>neurosport.pl</span>
      </h1>
      <h2>Informacje ogólne</h2>
      <ol className="private-policy-list">
        <li>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i
            ochrony danych osobowych przekazanych przez Użytkowników w związku z
            korzystaniem przez nich usług NEUROSPORT poprzez Serwis.
          </p>
        </li>
        <li>
          <p>
            Administratorem danych osobowych zawartych w serwisie jest
            Martyna Hursowicz z siedzibą na os. Stare Żegrze 177/1 w Poznaniu KRS………………...…..
            NIP 7822885577 REGON 634512019
          </p>
        </li>
        <li>
          <p>
            W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy
            wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu
            danych osobom nieupoważnionym. Kontrolujemy ich wykonywanie i stale
            sprawdzamy ich zgodność z odpowiednimi aktami prawnymi - ustawą o
            ochronie danych osobowych, ustawą o świadczeniu usług drogą
            elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i
            aktach prawa wspólnotowego.
          </p>
        </li>
        <li>
          <p>
            Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez
            Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają
            Administratora do przetwarzania danych osobowych na podstawie
            przepisów prawa lub w celu realizacji zawartej pomiędzy stronami
            umowy.
          </p>
        </li>
        <li>
          <p>
            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
            ich zachowaniach w następujący sposób:
          </p>
          <ol className="private-policy-list-inside">
            <li>
              <p>poprzez dobrowolnie wprowadzone w formularzach informacje</p>
            </li>
            <li>
              <p>
                poprzez gromadzenie plików “cookies” [patrz polityka plików
                “cookies”]
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>Serwis zbiera informacje dobrowolnie podane przez użytkownika.</p>
        </li>
        <li>
          <p>
            Dane podane w formularzu są przetwarzane w celu wynikającym z
            funkcji konkretnego formularza np. w celu dokonania procesu obsługi
            kontaktu informacyjnego.
          </p>
        </li>
        <li>
          <p>
            Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani
            udostępnione osobom trzecim, zgodnie z przepisami Ustawy o ochronie
            danych osobowych.
          </p>
        </li>
        <li>
          <p>
            Do danych zawartych w formularzu przysługuje wgląd osobie fizycznej,
            która je tam umieściła. Osoba ta ma również praw do modyfikacji i
            zaprzestania przetwarzania swoich danych w dowolnym momencie.
          </p>
        </li>
        <li>
          <p>
            Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności
            serwisu, na które może wpłynąć rozwój technologii internetowej,
            ewentualne zmiany prawa w zakresie ochrony danych osobowych oraz
            rozwój naszego serwisu internetowego. O wszelkich zmianach będziemy
            informować w sposób widoczny i zrozumiały.
          </p>
        </li>
        <li>
          <p>
            W serwisie mogą pojawiać się linki do innych stron internetowych.
            Takie strony internetowe działają niezależnie od Serwisu i nie są w
            żaden sposób nadzorowane przez serwis neurosport.pl Strony te mogą
            posiadać własne polityki dotyczące prywatności oraz regulaminy, z
            którymi zalecamy się zapoznać. W razie wątpliwości co któregokolwiek
            z zapisów niniejszej polityki prywatności jesteśmy do dyspozycji -
            nasze dane znaleźć można w zakładce -{" "}
            <Link to="/contact">KONTAKT</Link>.
          </p>
        </li>
      </ol>
    </div>
  )
}
