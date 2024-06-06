---
isPage: true
draft: false
title: Contact
description: Pour toutes informations ou intérogations concernant la solution.
image:
  src: /images/uploads/153.Mention.png
hero:
  title: Contact
  text: Pour toutes informations ou intérogations concernant la solution.
  image:
    src: /images/uploads/153.Mention.svg
blocks:
  - type: cta
    cta:
      blank: true
      url: mailto:lawyerify@uncinq.dev
      text: email à lawyerify@uncinq.dev
    cta_second:
      blank: true
      url: 'tel:+33678858604'
      text: téléphone au 06 78 85 86 04
    background: false
    heading:
      title: Simplement par
  - type: embed
    background: false
    embed: >-
      <!-- Cal inline embed code begins -->

      <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>

      <script type="text/javascript">

      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", {origin:"https://app.cal.com"});


      Cal("inline", {
        elementOrSelector:"#my-cal-inline",
        calLink: "sebousan/lawyerify"
      });


      Cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#060c84"}}});

      </script>

      <!-- Cal inline embed code ends -->
    heading:
      title: Ou prendre rendez-vous en ligne ?
---
