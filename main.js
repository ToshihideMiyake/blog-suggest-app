function startTest(){
Swal.fire({
    title: '年単位で長期間の禁欲がしたい',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'YES',
    denyButtonText: `そこまでではない`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    // 1問目YES
    if (result.isConfirmed) {
        window.onload=Swal.fire({
            title: '同じ志を持つ仲間と交流したい',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'YES',
            denyButtonText: `一人でやりたい`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            // YES->yes
            if (result.isConfirmed) {
                Swal.fire({
                    title: '同じレベルの人とツルみたい',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'YES',
                    denyButtonText: `色々な人の意見を聞きたい`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        // yes->yes->yes
                        Swal.fire({
                            title: '禁欲カウンター/マジェスティックカウンター',
                            text: 'あなたにオススメなアプリは「禁欲カウンター/マジェスティックカウンター」です',
                            imageUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/s/supplementgym/20220607/20220607203602.png',
                            imageWidth: 500,
                            imageHeight: 300,
                            imageAlt: 'Custom image',
                          })
                    } else if (result.isDenied) {
                        // yes->yes->no
                        Swal.fire({
                            title: 'RAISE',
                            text: 'あなたにオススメなアプリは「RAISE」です',
                            imageUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/s/supplementgym/20220607/20220607202037.png',
                            imageWidth: 200,
                            imageHeight: 200,
                            imageAlt: 'Custom image',
                          })
                    }})
                        
            } else if (result.isDenied) {
                // yes->NO
                Swal.fire({
                    title: '◯禁タイマー',
                    text: 'あなたにオススメなアプリは「◯禁タイマー」です',
                    imageUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/s/supplementgym/20220607/20220607202049.png',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            }
          })
    } else if (result.isDenied) {
        // 1問目NO
        window.onload=Swal.fire({
            title: '同じ志を持つ仲間と交流したい',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'YES',
            denyButtonText: `一人でやりたい`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            // no->YES
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'RAISE',
                    text: 'あなたにオススメなアプリは「RAISE」です',
                    imageUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/s/supplementgym/20220607/20220607202037.png',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            } else if (result.isDenied) {
                // NO->no
                Swal.fire({
                    title: '◯禁タイマー',
                    text: 'あなたにオススメなアプリは「◯禁タイマー」です',
                    imageUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/s/supplementgym/20220607/20220607202049.png',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            }
          })
    }
  })
}