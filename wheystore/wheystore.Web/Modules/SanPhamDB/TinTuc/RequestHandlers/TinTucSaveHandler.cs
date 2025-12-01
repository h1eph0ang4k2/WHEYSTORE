using MyRow = wheystore.SanPhamDB.TinTucRow;

namespace wheystore.SanPhamDB;

public interface ITinTucSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class TinTucSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ITinTucSaveHandler
{
}