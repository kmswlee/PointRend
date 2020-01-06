import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
from pointGenerate import getpoint

my_mask=np.asarray(Image.open("/workspace/images/image1.jpg").resize((64,64)))
my_img=np.asarray(Image.open("/workspace/images/image2.jpg").resize((64,64)))
my_mask=my_mask[:,:,0]

points=getpoint(my_mask,1,1,nearest_neighbor=1)
points=list(zip(*points))

plt.imshow(my_img,cmap="Purples")
plt.scatter(points[1],points[0],c='black',s=4)
plt.savefig('/workspace/public/output.png',dpi=400)

print(1)
