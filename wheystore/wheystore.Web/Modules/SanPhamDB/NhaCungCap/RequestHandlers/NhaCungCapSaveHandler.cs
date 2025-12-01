using MyRow = wheystore.SanPhamDB.NhaCungCapRow;

namespace wheystore.SanPhamDB;

public interface INhaCungCapSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class NhaCungCapSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    INhaCungCapSaveHandler
{
}