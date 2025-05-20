Adapting LLMs for specific tasks usually involves fine-tuning through re-inforcement learning with human feedback on preference data. 

* The labels might be from different labellers but it takes a one-size-fits-all approach. 
This approach optimizes a single preference model. eventually not being robust to unique characteristics. to address this issue **GRPO** is built.

This *GRPO* builds upon reward free direct preference optimization methods (meaning there's no rewarding techniques) but unlike previous approaches it seeks a robust policy to maximize the worst case group performance. 

To achieve this GRPO actively and sequentially measures weights or the importance of different groups prioritizing groupswith worse cumulative loss. 

--> What is log linear policy class
