# Builds cover-composed.jpg: user's cover design + personal photo on the right, blended.
from PIL import Image, ImageFilter
W,H=2382,3370
bg=Image.open('scripts/magazine/cover-new.jpeg').convert('RGB')
bg=bg.resize((W,round(bg.height*W/bg.width)),Image.LANCZOS)
top=60; bg=bg.crop((0,top,W,top+H))
p=Image.open('scripts/magazine/cover-photo-cut.png').convert('RGBA')
p=p.crop(p.getbbox())
ph=int(H*0.50); pw=round(p.width*ph/p.height); p=p.resize((pw,ph),Image.LANCZOS)
a=p.split()[3].filter(ImageFilter.MinFilter(5)).filter(ImageFilter.GaussianBlur(2))
fade=Image.new('L',(pw,ph))
for y in range(ph):
    v=255 if y<ph*0.72 else int(255*max(0,(ph-y)/(ph*0.28)))
    fade.paste(v,(0,y,pw,y+1))
from PIL import ImageChops
p.putalpha(ImageChops.multiply(a,fade))
y0=int(H*0.715)-ph
bg.paste(p,(W-pw-20,y0),p)
bg.save('scripts/magazine/cover-composed.jpg',quality=93)
