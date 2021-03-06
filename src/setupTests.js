// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("./hooks/useAsync", () => ({
  __esModule: true,
  default: () => ({
    status: "success",
    error: false,
    execute: () => {},
    value: {
      next_to_go_ids: [
        "94f8f9ee-464a-40da-b2f0-b44589c9c02c",
        "f767e22b-7f14-4018-80a2-aa66ec1a194f",
        "99b668ad-f872-43cd-8b1e-4861441a19c8",
        "35a8285d-d920-44d6-892d-7a89b85cdaa3",
        "0bc6b8e5-2b66-43c2-94b6-c8bbe1c96d35",
        "7634a441-9641-4594-a42b-70c28f23644d",
        "bbd21e51-fa3d-45a0-a5e7-e0be4b01a2b5",
        "fc5ef672-4f96-4c64-b2ed-c6654ba7be70",
        "ee6aa23f-55a3-4ec4-95cd-a79b4e45d6e1",
        "571b9efe-7339-469a-a0bd-25208a5e907c",
      ],
      race_summaries: {
        "0bc6b8e5-2b66-43c2-94b6-c8bbe1c96d35": {
          race_id: "0bc6b8e5-2b66-43c2-94b6-c8bbe1c96d35",
          race_name: "Golden State Million Futurity",
          race_number: 10,
          meeting_id: "f0bbdcc9-7e71-4fa8-a712-05cb762a7a90",
          meeting_name: "Los Alamitos",
          category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
          advertised_start: { seconds: 1635741960 },
          race_form: {
            distance: 366,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "045cea71-a641-11e7-ba1d-066a01c9ce6e",
              name: "Firm",
              short_name: "firm",
            },
            track_condition_id: "045cea71-a641-11e7-ba1d-066a01c9ce6e",
            weather: {
              id: "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
              name: "OCAST",
              short_name: "ocast",
              icon_uri: "OCAST",
            },
            weather_id: "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
            race_comment:
              "IN HOTT PURSUIT (3) was in the minor money at this track (Dirt) over this distance last time. Form over this journey is strong, boasting three wins from five starts. Has good early speed and is expected to be in the finish. JUST A KOOL BOY (6) was a winner here over 366m by 1.3 lengths last time, making it back to back wins. Has a great record at this journey with two wins from three starts and is among the leading chances. CHIZUM (7) scored a 0.8 lengths win last start at this track (Dirt) over this distance. Form over this journey is strong, boasting four wins from six starts. Cruz Mendez who has scored on him three times retains the mount. Capable of going close on best figures. SIGNIFICANT DYNASTY (4) has put together back-to-back placings, the latest when second beaten 1.3 lengths over 366m at this track (Dirt). Yet to win at the distance but has recorded three minor placings from five tries and has to be respected.",
            additional_data:
              '{"gait":"Gallop","prizes":[{"type":"total_value","value":"$1,538,451"}],"start_time":"01/11/2021 14:10:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "IN HOTT PURSUIT (3) was in the minor money at this track (Dirt) over this distance last time. Form over this journey is strong, boasting three wins from five starts. Has good early speed and is expected to be in the finish. JUST A KOOL BOY (6) was a winner here over 366m by 1.3 lengths last time, making it back to back wins. Has a great record at this journey with two wins from three starts and is among the leading chances. CHIZUM (7) scored a 0.8 lengths win last start at this track (Dirt) over this distance. Form over this journey is strong, boasting four wins from six starts. Cruz Mendez who has scored on him three times retains the mount. Capable of going close on best figures. SIGNIFICANT DYNASTY (4) has put together back-to-back placings, the latest when second beaten 1.3 lengths over 366m at this track (Dirt). Yet to win at the distance but has recorded three minor placings from five tries and has to be respected.",
          },
          venue_id: "961e2c9d-e30b-4771-a7ea-294a8f794e61",
          venue_name: "Los Alamitos",
          venue_state: "CA",
          venue_country: "USA",
        },
        "35a8285d-d920-44d6-892d-7a89b85cdaa3": {
          race_id: "35a8285d-d920-44d6-892d-7a89b85cdaa3",
          race_name: "Rsm Accountants Goulburn Pace",
          race_number: 6,
          meeting_id: "3623d112-63de-4259-b697-40916c03b9f6",
          meeting_name: "Goulburn",
          category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
          advertised_start: { seconds: 1635741780 },
          race_form: {
            distance: 1710,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "1db9cab0-b747-11ea-80cf-6a390f79827e",
              name: "Fast",
              short_name: "fast",
            },
            track_condition_id: "1db9cab0-b747-11ea-80cf-6a390f79827e",
            weather: {
              id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
              name: "FINE",
              short_name: "fine",
              icon_uri: "FINE",
            },
            weather_id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
            race_comment:
              "ROCKIN WITH ELVIS (8) ran tenth last start at Menangle over 2300m, beaten 35 metres. The testing material in this line-up. JEDI MIND (10) ran fifth last start at Menangle over 2300m, beaten 20 metres when having a tough trip. Expect him to be prominent. HELLOFALASS (2) must be considered after she finished third over 1720m at Penrith a week-and-a-half ago. Has a handy draw today. MAJOR HUSS (9) last appeared when fourth over 1720m at Young three-and-a-half months ago. Must be respected.",
            additional_data:
              '{"gait":"Pace","prizes":[{"type":"total_value","value":"$6,528"}],"start_time":"01/11/2021 14:13:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "ROCKIN WITH ELVIS (8) ran tenth last start at Menangle over 2300m, beaten 35 metres. The testing material in this line-up. JEDI MIND (10) ran fifth last start at Menangle over 2300m, beaten 20 metres when having a tough trip. Expect him to be prominent. HELLOFALASS (2) must be considered after she finished third over 1720m at Penrith a week-and-a-half ago. Has a handy draw today. MAJOR HUSS (9) last appeared when fourth over 1720m at Young three-and-a-half months ago. Must be respected.",
          },
          venue_id: "b50cf70a-febf-43de-8056-48215403942b",
          venue_name: "Goulburn",
          venue_state: "NSW",
          venue_country: "AUS",
        },
        "571b9efe-7339-469a-a0bd-25208a5e907c": {
          race_id: "571b9efe-7339-469a-a0bd-25208a5e907c",
          race_name: "Peter Enals Cobram Caravans Pace (2Nd Heat)",
          race_number: 7,
          meeting_id: "ae580fee-0eff-4b2e-9a93-364a7ff5f2d9",
          meeting_name: "Cobram",
          category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
          advertised_start: { seconds: 1635742380 },
          race_form: {
            distance: 1670,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
              name: "Good",
              short_name: "good",
            },
            track_condition_id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
            weather: {
              id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
              name: "FINE",
              short_name: "fine",
              icon_uri: "FINE",
            },
            weather_id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
            race_comment:
              "PROSECCO BOY (9) is racing consistently with placings at his past three outings. Leading contender who should find a deserved win. ROCK THE NATION (4) was only tenth in a stronger field over 2160m at Echuca last time after a good third at Shepparton two runs back. Rates highly and can atone. HOLSTEIN (3) is worth thought after finishing fourth first-up over 1755m at Echuca last time out. FOR TONY (5) could only finish sixth over 2160m at Echuca most recently. Is a quick beginner and this distance will suit him. Watch closely.",
            additional_data:
              '{"gait":"Pace","prizes":[{"type":"total_value","value":"$4,500"}],"start_time":"01/11/2021 14:23:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "PROSECCO BOY (9) is racing consistently with placings at his past three outings. Leading contender who should find a deserved win. ROCK THE NATION (4) was only tenth in a stronger field over 2160m at Echuca last time after a good third at Shepparton two runs back. Rates highly and can atone. HOLSTEIN (3) is worth thought after finishing fourth first-up over 1755m at Echuca last time out. FOR TONY (5) could only finish sixth over 2160m at Echuca most recently. Is a quick beginner and this distance will suit him. Watch closely.",
          },
          venue_id: "b4d9c421-c38c-4acf-8161-685c8a32bbbc",
          venue_name: "Cobram",
          venue_state: "VIC",
          venue_country: "AUS",
        },
        "7634a441-9641-4594-a42b-70c28f23644d": {
          race_id: "7634a441-9641-4594-a42b-70c28f23644d",
          race_name: "Ladbrokes Handicap Maiden",
          race_number: 2,
          meeting_id: "beedd829-ae50-478b-a5ad-a7612fa2a344",
          meeting_name: "Bathurst",
          category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
          advertised_start: { seconds: 1635742020 },
          race_form: {
            distance: 307,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
              name: "Good",
              short_name: "good",
            },
            track_condition_id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
            weather: {
              id: "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
              name: "OCAST",
              short_name: "ocast",
              icon_uri: "OCAST",
            },
            weather_id: "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
            race_comment:
              "FLY AWAY FRANK (7) has his first outing without a trial but profiles nicely for this. Can get off the mark here. MR. DETERMINE (2) is on debut without trialling for this. Can kick off with a good run. I'M NO SLOUCH (1) has been settling off the speed lately, finishing eighth (18.69) last time in a Maiden at this track. Reliable out of the boxes and should take advantage of the inside draw. Has ability and can atone. JACOBITE TARTAN (5) profiles well on debut so it will pay to keep her very safe.",
            additional_data:
              '{"gait":"Gallop","classes":["MAIDEN"],"prizes":[{"type":"1st","value":"1200"},{"type":"2nd","value":"340"},{"type":"3rd","value":"250"},{"type":"total_value","value":"1790"}],"start_time":"01/11/2021 14:17:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "FLY AWAY FRANK (7) has his first outing without a trial but profiles nicely for this. Can get off the mark here. MR. DETERMINE (2) is on debut without trialling for this. Can kick off with a good run. I'M NO SLOUCH (1) has been settling off the speed lately, finishing eighth (18.69) last time in a Maiden at this track. Reliable out of the boxes and should take advantage of the inside draw. Has ability and can atone. JACOBITE TARTAN (5) profiles well on debut so it will pay to keep her very safe.",
          },
          venue_id: "7832d381-2c33-4b45-a6b3-c8a7c8a89647",
          venue_name: "Bathurst",
          venue_state: "NSW",
          venue_country: "AUS",
        },
        "94f8f9ee-464a-40da-b2f0-b44589c9c02c": {
          race_id: "94f8f9ee-464a-40da-b2f0-b44589c9c02c",
          race_name: "Shima Shine At Stud",
          race_number: 2,
          meeting_id: "2c685a06-c259-45bb-8ea4-1485e16e75e5",
          meeting_name: "Ballarat",
          category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
          advertised_start: { seconds: 1635741420 },
          race_form: {
            distance: 390,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
              name: "Good",
              short_name: "good",
            },
            track_condition_id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
            weather: {
              id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
              name: "FINE",
              short_name: "fine",
              icon_uri: "FINE",
            },
            weather_id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
            race_comment:
              "QUEEN AMAROK (1) took a sit and fought on well to be beaten 2 lengths into second (22.90) at Geelong in a Maiden over 400m. One of the contenders. SERVING SOLDIER (3) overdue and expected to feature. URBANA BALE (2) turned in a plain performance last time when fifth at Geelong over 400m behind Zipping James (23.28) in a Maiden. Better than the latest run and deserves another chance. RUBY DEALER (7) cannot be left out after placing last start.",
            additional_data:
              '{"gait":"Gallop","classes":["TIER 3 - MAIDEN"],"prizes":[{"type":"1st","value":"1000"},{"type":"2nd","value":"290"},{"type":"3rd","value":"145"},{"type":"4th","value":"80"}],"start_time":"01/11/2021 14:07:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "QUEEN AMAROK (1) took a sit and fought on well to be beaten 2 lengths into second (22.90) at Geelong in a Maiden over 400m. One of the contenders. SERVING SOLDIER (3) overdue and expected to feature. URBANA BALE (2) turned in a plain performance last time when fifth at Geelong over 400m behind Zipping James (23.28) in a Maiden. Better than the latest run and deserves another chance. RUBY DEALER (7) cannot be left out after placing last start.",
          },
          venue_id: "6a2a6438-5747-4771-a17d-bc40523bfaef",
          venue_name: "Ballarat",
          venue_state: "VIC",
          venue_country: "AUS",
        },
        "99b668ad-f872-43cd-8b1e-4861441a19c8": {
          race_id: "99b668ad-f872-43cd-8b1e-4861441a19c8",
          race_name: "Nz Yearling Sales Series Aged Classic Hcp Pace",
          race_number: 10,
          meeting_id: "1011d209-79db-4ce0-997e-b46d1112dc6d",
          meeting_name: "Addington",
          category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
          advertised_start: { seconds: 1635741720 },
          race_form: {
            distance: 2600,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "1db9cab0-b747-11ea-80cf-6a390f79827e",
              name: "Fast",
              short_name: "fast",
            },
            track_condition_id: "1db9cab0-b747-11ea-80cf-6a390f79827e",
            weather: {
              id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
              name: "FINE",
              short_name: "fine",
              icon_uri: "FINE",
            },
            weather_id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
            race_comment:
              "SHAN NOBLE (8) has returned in good form, winning first-up two back and then filling a minor placing last time out at Addington over 2600m, beaten 2 metres. Will strip fitter this time around. Leading contender. STEEL THE SHOW (9) is racing well with placings at his past three outings, the latest a strong late run to finish a 1.4 metres second at Addington over 2600m. Has been close of late and is ready to win this time. ALTA WISEGUY (10) is next best after finishing runner-up when resuming over 1700m at Alexandra Park last time out. Won a recent trial when beating six others home and will be a lot fitter today. GOT YOU COVERED (5) is next best following a run of three top-three finishes, the latest at Addington two-and-a-half weeks ago when finishing second after trying to lead all of the way.",
            additional_data:
              '{"gait":"Pace","classes":["R55 TO R100 SPECIAL HANDICAP"],"prizes":[{"type":"total_value","value":"$47,619"}],"start_time":"01/11/2021 14:12:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "SHAN NOBLE (8) has returned in good form, winning first-up two back and then filling a minor placing last time out at Addington over 2600m, beaten 2 metres. Will strip fitter this time around. Leading contender. STEEL THE SHOW (9) is racing well with placings at his past three outings, the latest a strong late run to finish a 1.4 metres second at Addington over 2600m. Has been close of late and is ready to win this time. ALTA WISEGUY (10) is next best after finishing runner-up when resuming over 1700m at Alexandra Park last time out. Won a recent trial when beating six others home and will be a lot fitter today. GOT YOU COVERED (5) is next best following a run of three top-three finishes, the latest at Addington two-and-a-half weeks ago when finishing second after trying to lead all of the way.",
          },
          venue_id: "91a977e1-b438-4534-b138-3cb24536d081",
          venue_name: "Addington",
          venue_state: "NZ",
          venue_country: "NZ",
        },
        "bbd21e51-fa3d-45a0-a5e7-e0be4b01a2b5": {
          race_id: "bbd21e51-fa3d-45a0-a5e7-e0be4b01a2b5",
          race_name: "Race 7 - 1400",
          race_number: 7,
          meeting_id: "62728db6-00bb-409d-b840-9c580bef3c45",
          meeting_name: "Nagoya",
          category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
          advertised_start: { seconds: 1635742200 },
          race_form: {
            distance: 1400,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            race_comment:
              "KERN CREATOR (6) is still a maiden after 10 starts but was in the minors at this track two back before finishing sixth at this track last start. Expected to go close. NON REFERENCE (4) finished eighth last start over 1400m at this track, beaten 10 lengths. Rates strongly and expected to feature. NIHONPIRO BEYOND (3) settled well back at this course and distance last time but did find the line nicely to finish fifth, beaten 6 lengths. Well placed and expected to feature. HERO NEVER DIE (10) is a six-start maiden who is edging towards a win, the latest effort a solid second at this track over 1400m. Should be parked just off the speed despite the draw and can give a sight.",
            additional_data:
              '{"gait":"Gallop","start_time":"01/11/2021 14:20:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "KERN CREATOR (6) is still a maiden after 10 starts but was in the minors at this track two back before finishing sixth at this track last start. Expected to go close. NON REFERENCE (4) finished eighth last start over 1400m at this track, beaten 10 lengths. Rates strongly and expected to feature. NIHONPIRO BEYOND (3) settled well back at this course and distance last time but did find the line nicely to finish fifth, beaten 6 lengths. Well placed and expected to feature. HERO NEVER DIE (10) is a six-start maiden who is edging towards a win, the latest effort a solid second at this track over 1400m. Should be parked just off the speed despite the draw and can give a sight.",
          },
          venue_id: "0218fe84-9144-4c28-81ca-9b8647007d56",
          venue_name: "Nagoya",
          venue_state: "JPN",
          venue_country: "JPN",
        },
        "ee6aa23f-55a3-4ec4-95cd-a79b4e45d6e1": {
          race_id: "ee6aa23f-55a3-4ec4-95cd-a79b4e45d6e1",
          race_name: "Uncle Rusty's Photos",
          race_number: 9,
          meeting_id: "88fb51f1-3978-415c-a184-051428d57274",
          meeting_name: "Bundaberg",
          category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
          advertised_start: { seconds: 1635742200 },
          race_form: {
            distance: 460,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
              name: "Good",
              short_name: "good",
            },
            track_condition_id: "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
            weather: {
              id: "0b43a420-3b75-11e8-a5eb-06a5c6d9a756",
              name: "Overcast",
              short_name: "overcast",
              icon_uri: "Overcast",
            },
            weather_id: "0b43a420-3b75-11e8-a5eb-06a5c6d9a756",
            race_comment:
              "WHY HARMONY (1) is worth forgiving last start after finishing fourth (26.86) in a Grade 5 at this track over 460m. Has a blistering 26.51 best time at this course and distance. Worth another chance. GRACE'S SECRET (3) was checked in the run and missed the frame, finishing fifth in a Grade 5 last time (25.74) at Ipswich over 431m. Worth following up. ROTTNEST BLUES (2) is worth forgiving last start after finishing seventh (42.78) from Box 5 at Albion Park over 710m. Strong form has emerged from her last run. Must be included in calculations. SASSY ELLE (6) has ability and can feature with the right run after missing a cheque here most recently.",
            additional_data:
              '{"gait":"Gallop","classes":["GRADE 5"],"prizes":[{"type":"1st","value":"1190"},{"type":"2nd","value":"340"},{"type":"3rd","value":"170"},{"type":"total_value","value":"1700"}],"start_time":"01/11/2021 14:20:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "WHY HARMONY (1) is worth forgiving last start after finishing fourth (26.86) in a Grade 5 at this track over 460m. Has a blistering 26.51 best time at this course and distance. Worth another chance. GRACE'S SECRET (3) was checked in the run and missed the frame, finishing fifth in a Grade 5 last time (25.74) at Ipswich over 431m. Worth following up. ROTTNEST BLUES (2) is worth forgiving last start after finishing seventh (42.78) from Box 5 at Albion Park over 710m. Strong form has emerged from her last run. Must be included in calculations. SASSY ELLE (6) has ability and can feature with the right run after missing a cheque here most recently.",
          },
          venue_id: "ab3da8be-b1fa-47ba-b453-85fa855a6dc5",
          venue_name: "Bundaberg",
          venue_state: "QLD",
          venue_country: "AUS",
        },
        "f767e22b-7f14-4018-80a2-aa66ec1a194f": {
          race_id: "f767e22b-7f14-4018-80a2-aa66ec1a194f",
          race_name: "G Brakey-East Gippsland (Bm52)",
          race_number: 5,
          meeting_id: "76322936-0290-4fda-a853-6c81265a1dd8",
          meeting_name: "Bairnsdale",
          category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
          advertised_start: { seconds: 1635741600 },
          race_form: {
            distance: 1200,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "908a410f-ab10-11e7-85e3-0641c90711b8",
              name: "Good3",
              short_name: "good3",
            },
            track_condition_id: "908a410f-ab10-11e7-85e3-0641c90711b8",
            weather: {
              id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
              name: "FINE",
              short_name: "fine",
              icon_uri: "FINE",
            },
            weather_id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
            race_comment:
              "UNIQUE BAMBINO (11) was wide well-beaten first-up when expected to need it. His back-form is strong for this and he's suited in this grade with the 2kg claim. Draws well and won't get a better chance to get back into the winners circle. FOREVER LOUD (4) got closer at Yarra Valley. His only win came on a good track. He's a hope drawn to advantage. TYCOON FELIX (7) resumes and has won twice fresh and placed in two others. He won't be far away if presented forward. JOCKS (10) resumes and can use the rail. Is good enough to consider.",
            additional_data:
              '{"gait":"Gallop","prizes":[{"type":"total_value","value":"$15,000"}],"start_time":"01/11/2021 14:10:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "UNIQUE BAMBINO (11) was wide well-beaten first-up when expected to need it. His back-form is strong for this and he's suited in this grade with the 2kg claim. Draws well and won't get a better chance to get back into the winners circle. FOREVER LOUD (4) got closer at Yarra Valley. His only win came on a good track. He's a hope drawn to advantage. TYCOON FELIX (7) resumes and has won twice fresh and placed in two others. He won't be far away if presented forward. JOCKS (10) resumes and can use the rail. Is good enough to consider.",
          },
          venue_id: "87dcea4a-6bb1-42a7-ab21-181dab61919f",
          venue_name: "Bairnsdale",
          venue_state: "VIC",
          venue_country: "AUS",
        },
        "fc5ef672-4f96-4c64-b2ed-c6654ba7be70": {
          race_id: "fc5ef672-4f96-4c64-b2ed-c6654ba7be70",
          race_name: "Roofing Craftsmen (Bm58)",
          race_number: 4,
          meeting_id: "930f08bb-38e0-4842-bc14-87118b839b5f",
          meeting_name: "Ballina",
          category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
          advertised_start: { seconds: 1635742200 },
          race_form: {
            distance: 1000,
            distance_type: {
              id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
              name: "Metres",
              short_name: "m",
            },
            distance_type_id: "570775ae-09ec-42d5-989d-7c8f06366aa7",
            track_condition: {
              id: "11d7e662-487a-11ea-9d54-4689356d4521",
              name: "Good4",
              short_name: "good4",
            },
            track_condition_id: "11d7e662-487a-11ea-9d54-4689356d4521",
            weather: {
              id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
              name: "FINE",
              short_name: "fine",
              icon_uri: "FINE",
            },
            weather_id: "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
            race_comment:
              "LUCAP (5) loves this circuit with four wins and two seconds from ten starts. Can run a race while fresh. ELECTRIC DRAGON (7) doesn't win out of turn but is usually thereabouts and is a must for the multiples. FREYA'S CLOAK (1) gets 3kg off with the claim and can earn some minor money. FURPHY (4) has placed over this track and trip and can fill the frame. CANEXCELL (3) can run a race while fresh.",
            additional_data:
              '{"gait":"Gallop","prizes":[{"type":"total_value","value":"$24,000"}],"start_time":"01/11/2021 14:20:00 PM"}',
            generated: 1,
            silk_base_url: "drr38safykj6s.cloudfront.net",
            race_comment_alternative:
              "LUCAP (5) loves this circuit with four wins and two seconds from ten starts. Can run a race while fresh. ELECTRIC DRAGON (7) doesn't win out of turn but is usually thereabouts and is a must for the multiples. FREYA'S CLOAK (1) gets 3kg off with the claim and can earn some minor money. FURPHY (4) has placed over this track and trip and can fill the frame. CANEXCELL (3) can run a race while fresh.",
          },
          venue_id: "14d04752-77d6-4bf5-891b-fbdc636bb9c6",
          venue_name: "Ballina",
          venue_state: "NSW",
          venue_country: "AUS",
        },
      },
    },
  }),
}));

afterEach(() => {
  cleanup();
  jest.resetModules();
  jest.resetAllMocks();
});
