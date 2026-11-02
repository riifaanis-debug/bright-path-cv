import pymupdf
src=pymupdf.open('public/downloads/Majid_Al-Sofyani_CV_Magazine_Light.pdf')
out=pymupdf.open(); W,H=842,595
for i in range(0,len(src),2):
    p=out.new_page(width=W,height=H)
    right=pymupdf.Rect(W/2,0,W,H); left=pymupdf.Rect(0,0,W/2,H)
    if i==0:
        p.show_pdf_page(right,src,0,keep_proportion=True)
        lw=W/2*0.6; lh=lw*620/940
        p.insert_image(pymupdf.Rect(W/4-lw/2,H/2-lh/2,W/4+lw/2,H/2+lh/2),filename='scripts/magazine/snb-logo-color.png')
        nxt=None
    else:
        p.show_pdf_page(right,src,i-1,keep_proportion=True)
        if i<len(src): p.show_pdf_page(left,src,i,keep_proportion=True)
    p.draw_line((W/2,0),(W/2,H),color=(0.79,0.65,0.29),width=1)
out.save('public/downloads/Majid_Al-Sofyani_CV_Magazine_Book_Light.pdf',garbage=4,deflate=True)
print(len(src),len(out))
